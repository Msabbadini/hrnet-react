
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import ErrorText from "../errortext";
import { departments, states } from "#/utils/selectlist";
import Dropdown from "#components/atoms/dropdown";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { addEmployee } from "#/redux/reducers/employee.reducer";


const schema = yup
  .object({
    firstName: yup.string().min(2).max(20),
    lastName: yup.string().min(2).max(20),
    dateOfBirth: yup.date().test("Birth Date", "Must be a valid date", (value) => {
      return value;
    }),
    startDate: yup.date().test("Start Date", "Must be a valid date", (value) => {
      return value;
    }),
    department: yup.string(),
    street: yup.string().min(5),
    city: yup.string().min(3),
    state: yup.string().min(3),
    zipCode: yup.number().positive().integer(),
  })
  .required();

const CreateForm = ({ keyId = "" }) => {
  const { handleSubmit, formState: { errors }, register, control, reset } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const onCreate = (data) => {
    data.startDate = new Date(data.startDate).toLocaleDateString('fr-FR');
    data.dateOfBirth = new Date(data.dateOfBirth).toLocaleDateString('fr-FR');
    dispatch(addEmployee(data))
    reset({ firstName: "", lastName: "", dateOfBirth: "", startDate: "", department: "Sales", street: "", city: "", state: "Alabama", zipCode: "" })
    toast.success("Employee created successfully",{position: "bottom-right",})
  }

  return (

    <form onSubmit={handleSubmit(onCreate)}>
      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Employee
      </h6>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              First Name
            </label>
            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Jane"
              {...register(`firstName`, { required: true })}
            />
            {errors.firstName && <ErrorText error={"First name must be at least 2 characters"} />}
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              Last Name
            </label>
            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Doe"
              {...register(`lastName`, { required: true })}
            />
            {errors.lastName && <ErrorText error={"Last name must be at least 2 characters"} />}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              Date of Birth
            </label>
            {/* <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  
             {...register(`${keyId}-firstName`, { required: true })}
            
            /> */}
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePicker
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 block"
                  // type="date"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a date"
                  onChange={(date) => {
                    onChange(date);
                  }}
                  onBlur={onBlur}
                  selected={value}
                  // renderCustomHeader={CustomHeader}
                  todayButton="Today"
                />
              )}
            />
            {errors.dateOfBirth && <ErrorText error={"Must be a valid Date"} />}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              Start Date
            </label>
            <Controller
              name="startDate"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePicker
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                  // type="date"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a date"
                  onChange={(date) => {
                    onChange(date);
                  }}
                  onBlur={onBlur}
                  selected={value}
                  // renderCustomHeader={CustomHeader}
                  todayButton="Today"
                />
              )}
            />
            {errors.startDate && <ErrorText error={"Must be a valid Date"} />}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              Department
            </label>
            <Dropdown
              register={register}
              name="department"
              registerOptions={{ required: true }}
              options={departments}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />

            {errors.department && <ErrorText error={"Please select a Department"} />}
          </div>
        </div>
      </div>
      <hr className="mt-6 border-b-1 border-blueGray-300" />
      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Address
      </h6>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              Street
            </label>
            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              {...register(`street`, { required: true })}
            />
            {errors.street && <ErrorText error={"Please insert a street address"} />}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              City
            </label>
            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              {...register(`city`, { required: true })}
            />
            {errors.city && <ErrorText error={errors.city.message} />}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              State
            </label>
            <Dropdown
              register={register}
              name="state"
              registerOptions={{ required: true }}
              options={states}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
            {errors.state && <ErrorText error={errors.state?.message} />}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              Zip Code
            </label>
            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              {...register(`zipCode`, { required: true })}
            />
            {errors.zipCode && <ErrorText error={"Please insert a correct Zip code"} />}
          </div>

        </div>
      </div>
      <div className="w-full px-4 flex justify-end mt-5">
        <button className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="submit">
          Create
        </button>
        <ToastContainer />
      </div>
    </form>

  );

}

export default CreateForm;

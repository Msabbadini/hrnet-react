
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
import {differenceInYears} from "date-fns";

const schema = yup
  .object({
    firstName: yup.string().min(2).max(20),
    lastName: yup.string().min(2).max(20),
    dateOfBirth: yup.date()
    .test("Birth Date", "Must be to Date", (value:any) => value)
    .test("Must be Major", "Must be at least 18 years old", (value:Date|undefined) => value ? differenceInYears(new Date(), value)>=18 : false),
    startDate: yup.date()
    .test("Birth Date", "Must be to Date", (value:any) => value)
    .test("Start Date", "Must be 18 on start date", function(value:any) {
      const res = value && this.options.parent.dateOfBirth ? differenceInYears(value, this.options.parent.dateOfBirth)>=18 : false
      console.log(this, this.options, this.options.parent, value, yup.ref("dateOfBirth"), res, differenceInYears(value, this.options.parent.dateOfBirth))
      return res
    }),
    department: yup.string(),
    street: yup.string().min(5),
    city: yup.string().min(3),
    state: yup.string().min(1),
    zipCode: yup.number().positive().integer(),
  })
  .required();

const CreateForm = () => {
  const { handleSubmit, formState: { errors }, register, control, reset } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const onCreate = (data :any) => {
    data.startDate = new Date(data.startDate).toLocaleDateString('fr-FR');
    data.dateOfBirth = new Date(data.dateOfBirth).toLocaleDateString('fr-FR');
    dispatch(addEmployee(data))
    reset({ firstName: "", lastName: "", dateOfBirth: new Date(), startDate: new Date(), department: "Sales", street: "", city: "", state: "Alabama", zipCode: 0 })
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
            <label htmlFor="firstName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              First Name
            </label>
            <input id="firstName" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Jane"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <ErrorText error={"First name must be at least 2 characters"} />}
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label htmlFor="lastName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              Last Name
            </label>
            <input id="lastName" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Doe"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <ErrorText error={"Last name must be at least 2 characters"} />}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            
            <label htmlFor="dateOfBirth" className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
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
                id="dateOfBirth"
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
            {errors.dateOfBirth && <ErrorText error={errors.dateOfBirth.message} />}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label htmlFor="startDate" className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              Start Date
            </label>
            <Controller
              name="startDate"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePicker
                id="startDate"
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
            {errors.startDate && <ErrorText error={errors.startDate.message} />}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label htmlFor="department" className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              Department
            </label>
            <Dropdown
            id="department"
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
            <label htmlFor="street" className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              Street
            </label>
            <input id="street"  type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              {...register("street", { required: true })}
            />
            {errors.street && <ErrorText error={"Please insert a street address"} />}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label htmlFor="city" className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              City
            </label>
            <input id="city" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              {...register("city", { required: true })}
            />
            {errors.city && <ErrorText error={errors.city.message} />}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label htmlFor="state" className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              State
            </label>
            <Dropdown
            id="state"
              register={register}
              name="state"
              registerOptions={{ required: true }}
              options={states.map((state) => ({ value: state.abbreviation, label: state.label }))}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
            {errors.state && <ErrorText error={errors.state?.message} />}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label htmlFor="zipCode" className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
              Zip Code
            </label>
            <input id="zipCode" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              {...register("zipCode", { required: true })}
            />
            {errors.zipCode && <ErrorText error={"Please insert a correct Zip code"} />}
          </div>

        </div>
      </div>
      <div className="w-full px-4 flex justify-end mt-5">
        <button className="bg-green-700 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="submit">
          Create
        </button>
        <ToastContainer />
      </div>
    </form>

  );

}

export default CreateForm;

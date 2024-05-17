import Typography from "../atoms/typography";
import LabeledTextField from "./labeledtexfield";
import LabeledSelect from "./labeledselect";

export interface IUser {
    firstName: string
    lastName: string
    dateBirth: Date | null
    dateStart: Date | null
    department: string
}

export interface UserFormProps {
    register: any
    keyId: string
    labeledStyle: string
    departments: Array<object>
    user?: IUser | null | undefined
    onChange?: (value: IUser) => void
    onValidate?: (value: IUser) => boolean
}

const UserForm = ({ register, user, keyId, labeledStyle, departments, onValidate, onChange }: UserFormProps) => {

    return (

        <div className="flex flex-col gap-4 border border-purple-500 p-5 rounded-md">
            {/* <label htmlFor={`${keyId}-firstName`}>First Name</label>
            <input id={`${keyId}-firstName`} { ...register(`${keyId}-firstName`, { required: true }) } />
            <label htmlFor={`${keyId}-lastName`}>Last Name</label>
            <input id={`${keyId}-lastName`} { ...register(`${keyId}-lastName`, { required: true }) } /> */}
            <Typography component="h3" variant="body-lg">Employee</Typography>
            <LabeledTextField               
                {...register(`${keyId}-firstName`, { required: true })}
                className={labeledStyle}
                label='First Name'
                // id={`${keyId}-firstName`}
                type='text'
            />
            {/* <LabeledTextField
                {...register(`${keyId}-lastName`, { required: true })}
                className={labeledStyle}
                label='Last Name'
                id={`${keyId}-lastName`}
                type='text' /> */}
            {/* <LabeledDatePicker
                className={labeledStyle}
                label='Date of Birth'
                id={`${keyId}-date-birth`}
                date={dateBirth}
                onChange={(date: Date | null) => {
                    setDateBirth(date)
                    handleValidate()
                }}
            /> */}
            {/* <LabeledDatePicker
            className={labeledStyle}
            label='Start Date'
            id={`${keyId}-start-date`}
            date={dateStart}
            onChange={(date: Date | null) => {
                setDateStart(date)
                handleValidate()
            }}
        /> */}
            {/* <LabeledSelect
            label={"Department"}
            className={"flex flex-col gap-1"}
            name={"department"}
            id={`${keyId}-department`}
            options={departments}
            defaultValue={department}
            onChange={(e) => {
                console.log(e)
                // setDepartment(e)
                handleValidate()
            }}
            placeholder={'Select a department'}
            isMulti={false}
        /> */}
        </div>

    )
}

export default UserForm;
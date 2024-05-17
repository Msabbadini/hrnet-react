import { useState } from "react";
import Typography from "../atoms/typography";
import LabeledDatePicker from "./labeleddatepicker";
import LabeledSelect from "./labeledselect";
import LabeledTextField from "./labeledtexfield";
import UtilForm from "#/utils/form";

export interface IUser {
    firstName: string
    lastName: string
    dateBirth: Date | null
    dateStart: Date | null
    department: string
}

export interface UserFormProps {
    keyId: string
    labeledStyle: string
    departments: Array<object>
    user?: IUser | null | undefined
    onChange?: (value: IUser) => void
    onValidate?: (value: IUser) => boolean
}

const formUtil = new UtilForm()

const UserForm = ({ user, keyId, labeledStyle, departments, onValidate, onChange }: UserFormProps) => {
    const [firstName, setFirstName] = useState<string>(user ? user.firstName : '')
    const [lastName, setLastName] = useState<string>(user ? user.lastName : '')
    const [department, setDepartment] = useState<string>(user ? user.department : '')
    const [dateBirth, setDateBirth] = useState<Date | null>(user ? user.dateBirth : null);
    const [dateStart, setDateStart] = useState<Date | null>(user ? user.dateStart : null);
    const [error, setError] = useState<{ firstName: string, lastName: string, dateBirth: string, dateStart: string, department: string }>('')
    const handleValidate = () => {
        const user: IUser = {
            firstName,
            lastName,
            dateBirth,
            dateStart,
            department
        }
        setError({ firstName: "", lastName: "", dateBirth: "", dateStart: "", department: "" })
        if (!onChange) return
        if (firstName.length && lastName.length && dateBirth && dateStart && department.length) {
            if (onValidate?.(user)) {
                onChange(user)
            } else {
                onChange(user)
            }
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        // Utilisez la méthode handleInputChange de la classe UtilForm
        const updatedValue = formUtil.handleInputChange(event);

        // Mettez à jour l'état du champ de formulaire correspondant
        if (name === 'firstName') {
            setFirstName(updatedValue[value]);
        } else if (name === 'lastName') {
            setLastName(updatedValue[value]);
        } else if (name === 'department') {
            setDepartment(updatedValue[value]);
        }

        // Mettez à jour l'état des erreurs
        setError(formUtil.getErrors());
    };

    return (<div className="flex flex-col gap-4 border border-purple-500 p-5 rounded-md">
        <Typography component="h3" variant="body-lg">Employee</Typography>
        <LabeledTextField
            className={labeledStyle}
            label='First Name'
            id={`${keyId}-first-name`}
            name='first-name'
            type='text'
            defaultValue={firstName}
            onChange={(e) => {
                handleInputChange(e)
                // setFirstName(e.target.value)
                // handleValidate()
            }}
        />
        {/* {error.firstName.length && (<ErrorText>{error.firstName}</ErrorText>)} */}

        <LabeledTextField
            className={labeledStyle}
            label='Last Name'
            id={`${keyId}-last-name`}
            name='last-name'
            type='text'
            defaultValue={lastName}
            onChange={(e) => {
                setLastName(e.target.value)
                handleValidate()
            }}
        />
        <LabeledDatePicker
            className={labeledStyle}
            label='Date of Birth'
            id={`${keyId}-date-birth`}
            date={dateBirth}
            onChange={(date: Date | null) => {
                setDateBirth(date)
                handleValidate()
            }}
        />
        <LabeledDatePicker
            className={labeledStyle}
            label='Start Date'
            id={`${keyId}-start-date`}
            date={dateStart}
            onChange={(date: Date | null) => {
                setDateStart(date)
                handleValidate()
            }}
        />
        <LabeledSelect
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
        />
    </div>)
}

export default UserForm;
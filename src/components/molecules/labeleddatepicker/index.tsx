import DatePicker from "#/components/atoms/datepicker";
import Label from "#/components/atoms/label";

export interface LabeledDatePickerProps {
    date: Date|null|undefined;
    label: string;
    id: string;
    className?: string;
    onChange: (date: Date|null) => void;
}

const labelClass="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t  before:pointer-events-none before:transition-all peer-disabled:before:border-transparent "

const inputClass ="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 "

const LabeledDatePicker =({date, onChange, label, id, className}:LabeledDatePickerProps)=>{

    return (
        <div className={className}>
            <Label htmlFor={id} className={labelClass} >{label} </Label>
            <div className={inputClass}>
               <DatePicker
                    date={date}
                    onChange={onChange}
                    id={id}
                />
            </div>
        </div>
    )
}

export default LabeledDatePicker;

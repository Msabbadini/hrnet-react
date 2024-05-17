import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface DatePickerProps {
    id: string
    date: Date|null|undefined;
    onChange: (date: Date|null) => void;
}

const DatePicker = ({ id, date, onChange }:DatePickerProps) => {
    const dateStart = date ?? new Date();

    return (<ReactDatePicker
        id={id}
        selected={dateStart}
        onChange={onChange}
        required
        showYearDropdown
        dateFormat="dd/MM/yyyy"
        scrollableYearDropdown
        maxDate={new Date()}
        yearDropdownItemNumber={new Date().getFullYear() - 1900}
    />)
}

export default DatePicker;

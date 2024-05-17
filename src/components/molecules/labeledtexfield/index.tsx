import TextField from '#components/atoms/textfield'
import Label from '#components/atoms/label'

interface LabeledTextFieldProps {
  label: string;
  id: string;
  defaultValue?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const labelClass="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px]  before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t  before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none  peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400  before:border-blue-gray-200  after:border-blue-gray-200 "

const inputClass ="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0  disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 "

const LabeledTextField = ({
  label,
  id,
  className,
  defaultValue,
  onChange,
  ...props
}:LabeledTextFieldProps)=>{ 
  return (
    <div className={className}>
      <TextField  {...props} className={inputClass} onChange={onChange} />
      <Label htmlFor={id} className={labelClass}>{label}</Label>
    </div>
  )
}

export default LabeledTextField
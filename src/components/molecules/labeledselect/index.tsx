import Label from '#components/atoms/label'
import Dropdown from '#/components/atoms/dropdown';

interface LabeledSelectProps {
  label: string;
  name: string;
  id: string;
  className?: string;
  options: Array<object>;
  defaultValue?: object|string;
  placeholder: string;
  onChange: (e: any) => void;
  isMulti: boolean;
}


export default function LabeledSelect({label, id, className, defaultValue, options, onChange, ...props}:LabeledSelectProps) {
  return (
    <div
      className={className}
    >
        <Label htmlFor={id} >{label}</Label>
        <Dropdown defaultValue={defaultValue} options={options} onChange={onChange} {...props} />
    </div>
  )
}

const Dropdown = ({ register, options, name, registerOptions, ...props }:{register:any,options:any,name:any,registerOptions:any,className:string,})=>{
    if (!register) {
      return null;
    }

    return (
      <select {...register(name, registerOptions)} {...props}>
        {options.map((option: { value: string, label: string }, index:any) => { // Specify the type of the option object
          return (
            <option value={option.value} key={option.value + index}> // Access the value property correctly
              {option.label}
            </option>
          );
        })}
      </select>
    )
}

export default Dropdown;
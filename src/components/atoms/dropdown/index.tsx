const Dropdown = ({ register, options, name, registerOptions, id, ...props }:{register:any,options:any,name:any,registerOptions:any,className:string,id:string})=>{
    if (!register) {
      return null;
    }

    return (
      <select id={id} {...register(name, registerOptions)} {...props}>
        {options.map((option: { value: string, label: string }, index:any) => { // Specify the type of the option object
          return (
            <option value={option.value} key={option.value + index}> 
              {option.label}
            </option>
          );
        })}
      </select>
    )
}

export default Dropdown;
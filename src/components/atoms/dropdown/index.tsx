const Dropdown = ({ register, options, name, registerOptions, ...props })=>{
    if (!register) {
        return null;
      }
    
    return(
        <select {...register(name, registerOptions)} {...props}>
        {options.map((option, index) => {
          return (
            <option value={option.value} key={option + index}>
              {option.label}
            </option>
          );
        })}
      </select>
    )
}

export default Dropdown;
interface TextfieldProps {
  type?: string
  [key: string]: any
}

const TextField = ({ type="text",...props }:TextfieldProps) => {
  return (
    <input {...props} type={type} />
  )
}

export default TextField
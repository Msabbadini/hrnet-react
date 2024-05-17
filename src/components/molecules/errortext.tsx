import Typography from "../atoms/typography"


const ErrorText = ({error})=>{
    return (
        <Typography component="p" variant="body-sm" className="text-red-500">
            {error}
        </Typography>
    )
}

export default ErrorText;
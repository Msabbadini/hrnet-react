import { states } from "#/utils/selectlist";
import Typography from "../atoms/typography";
import LabeledSelect from "./labeledselect";
import LabeledTextField from "./labeledtexfield";

const AddressForm = ({labeledStyle,keyId }) => {
    return (
        <div className="flex flex-col gap-4 border border-purple-500 p-5 rounded-md">
            <Typography component="h3" variant="body-lg">Address</Typography>
            <LabeledTextField className={labeledStyle} label='Street' id={`${keyId}-street`} name='street' type='text' />
            <LabeledTextField className={labeledStyle} label='City' id={`${keyId}-city`} name='city' type='text' />
            <LabeledSelect label={"State"} className={"flex flex-col gap-1"} name={"state"} id={`${keyId}-state`} options={states} onChange={(e) => { }} placeholder={'Select a state'} isMulti={false} />
            <LabeledTextField className={labeledStyle} label='Zip Code' id={`${keyId}-zip-code`} name='zip-code' type='text' />
        </div>
    )
}

export default AddressForm;
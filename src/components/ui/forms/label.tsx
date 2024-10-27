import {LabelProps} from "@/components/ui/forms/types";

export const Label = ({label, id}: LabelProps) => {
    return <label className={'mb-2 font-semibold'} htmlFor={id}>{label}</label>
}
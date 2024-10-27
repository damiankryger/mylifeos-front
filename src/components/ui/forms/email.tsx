import {InputProps} from "@/components/ui/forms/types";
import {Base} from "@/components/ui/forms/base";

export const Email = (props: InputProps) => {
    return <Base {...props} type={'email'}/>
}
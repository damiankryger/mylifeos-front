import {InputProps} from "@/components/ui/forms/types";
import {Base} from "@/components/ui/forms/base";

export const Password = (props: InputProps) => {
    //TODO: Dodać możliwość przełączania się między podglądem hasła a hasłem zakrytym

    return <Base {...props} type={'password'}/>
}
import {PrimaryButton} from "@/components/ui/buttons";
import {SubmitProps} from "@/components/ui/forms/types";
import {useFormikContext} from "formik";

export const Submit = (props: SubmitProps) => {
    const {isSubmitting} = useFormikContext();

    return <PrimaryButton whileFocus={{scale: 1.05}}
                          whileHover={{scale: 1.05}}
                          whileTap={{scale: 0.95}} {...props} isLoading={isSubmitting} type={'submit'}/>
}
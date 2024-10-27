import {InputProps} from "@/components/ui/forms/types";
import {FieldHookConfig, useField} from "formik";

export const Base = ({...props}: InputProps) => {
    const [field] = useField(props as FieldHookConfig<string>)

    return <input
        className={'px-4 py-2 rounded w-full border'}
        type={'text'}
        {...field}
        {...props}
    />
}
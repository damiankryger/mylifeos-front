import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {ButtonProps} from "@/components/ui/buttons/types";

export type LabelProps = {
    label: string,
    id?: string
}

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type SubmitProps = {} & ButtonProps
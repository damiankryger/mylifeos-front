import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {MotionProps} from "framer-motion";

export type ButtonProps = {isLoading?: boolean} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & MotionProps
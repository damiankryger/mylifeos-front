import {ButtonProps} from "@/components/ui/buttons/types";
import { motion } from "framer-motion";
import {CircleSpinner} from "react-spinners-kit";

export const Primary = (props: ButtonProps) => {
    return <motion.button
        whileFocus={{scale: 1.1}}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className={'flex items-center space-x-2 px-6 py-2 font-semibold bg-indigo-500 text-white rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 active:bg-indigo-800'}
        {...props}
    >
        <CircleSpinner size={16} loading={props.isLoading}/>
        <p>{props.children}</p>
    </motion.button>
}
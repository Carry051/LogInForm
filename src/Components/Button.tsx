import { motion } from 'framer-motion';
import { FC } from 'react';

type buttonProps = {
    children: Array<string> | string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    className: string | undefined;
    onClick?: () => void;
};

const Button: FC<buttonProps> = ({ type, children, className, onClick }) => {
    return (
        <>
            <motion.button
                whileHover={{
                    scale: 1.2,
                }}
                whileTap={{ scale: 0.7 }}
                transition={{ duration: 0.3 }}
                className={` ${className} mt-8 px-16 py-2 rounded-xl  font-bold text-xl`}
                type={type}
                onClick={onClick}
            >
                {children}
            </motion.button>
        </>
    );
};

export default Button;

import { FC } from 'react';

import { motion } from 'framer-motion';

type buttonProps = {
    children: Array<string> | string;
    type?: 'button' | 'submit' | 'reset';
    className: string | undefined;
    onClick?: () => void;
};

const Button: FC<buttonProps> = ({ type, children, className, onClick }) => {
    return (
        <>
            <motion.button
                whileTap={{ scale: 0.7 }}
                transition={{ duration: 0.3 }}
                className={` ${className} mt-6 px-16 py-2 rounded-xl font-bold text-xl`}
                type={type}
                onClick={onClick}
            >
                {children}
            </motion.button>
        </>
    );
};

export default Button;

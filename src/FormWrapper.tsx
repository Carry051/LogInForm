import { useState } from 'react';

import { motion } from 'framer-motion';

import Button from './Components/Button';
import LoginForm from './layout/LoginForm';
import RegisterForm from './layout/RegisterForm';

const FormWrapper = () => {
    const [handleButton, setHandleButton] = useState(true);

    return (
        <div className='wrapper'>
            <motion.div
                initial={{ x: 0 }}
                animate={{
                    x: handleButton ? 0 : '100%',
                }}
                transition={{ duration: 0.1, ease: 'easeIn' }}
                className={`switchSide ${
                    handleButton
                        ? 'rounded-r-[100px] duration-[0.8s]'
                        : 'rounded-l-[100px] duration-[0.8s]'
                }`}
            >
                <h2 className='text-5xl font-extrabold'>
                    {handleButton ? 'Already have an account?' : 'New here?'}
                </h2>
                <p className='text-2xl'>
                    {handleButton
                        ? 'Sign in to access your account!'
                        : 'Create an account to get started!'}
                </p>
                <div>
                    <Button
                        className={
                            'border-[1px] hover:bg-black duration-[0.3s] ease-out'
                        }
                        onClick={() => setHandleButton(!handleButton)}
                    >
                        Sign {handleButton ? 'In' : 'Up'}
                    </Button>
                </div>
            </motion.div>

            <LoginForm />
            <RegisterForm />
        </div>
    );
};

export default FormWrapper;

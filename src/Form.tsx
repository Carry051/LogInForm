import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { motion } from 'framer-motion';
import {
    IoLogoGoogle,
    IoLogoFacebook,
    IoLogoLinkedin,
    IoLogoGithub,
} from 'react-icons/io5';

import Button from './Components/Button';

type FormInput = {
    name: string;
    email: string;
    password: string;
};

const Form = () => {
    const [handleButton, setHandleButton] = useState(true);

    const { register, handleSubmit } = useForm<FormInput>();
    const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

    return (
        <div className='bg-black min-w-[70%] min-h-[80%] rounded-3xl flex items-center text-center '>
            <motion.div
                initial={{ x: 0 }}
                animate={{
                    x: handleButton ? 0 : '100%',
                }}
                transition={{ duration: 0.1, ease: 'easeIn' }}
                className={`rounded-3xl absolute min-w-[35%] min-h-[80%] bg-green-500 flex flex-col justify-center gap-8 ${
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

            <div className='w-[50%]'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className=' text-5xl mb-10'>Sign In</h1>
                    <div className='flex flex-col items-center gap-4 mb-6 '>
                        <input
                            type='email'
                            placeholder='Email'
                            {...register('email')}
                            className='bg-transparent border-2 w-[80%] rounded-lg py-2 pl-2 hover:border-green-400 transition-all duration-[0.5s] outline-none focus:border-green-600'
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            {...register('password')}
                            className='border-2 bg-transparent w-[80%] rounded-lg py-2 pl-2  hover:border-green-400 transition-all duration-[0.5s] outline-none focus:border-green-600'
                        />
                    </div>
                    <p className='text-gray-400'>or use social login buttons</p>
                    <ul className='flex justify-center gap-12 my-6'>
                        <li>
                            <a href='#google' className='hover:text-green-500'>
                                <IoLogoGoogle size={25} />
                            </a>
                        </li>
                        <li>
                            <a href='#facebook'>
                                <IoLogoFacebook
                                    size={25}
                                    className='hover:text-green-500'
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href='#linkedin'
                                className='hover:text-green-500'
                            >
                                <IoLogoLinkedin size={25} />
                            </a>
                        </li>
                        <li>
                            <a href='#github' className='hover:text-green-500'>
                                <IoLogoGithub size={25} />
                            </a>
                        </li>
                    </ul>
                    <div>
                        <a
                            href='#forgotPassword'
                            className='hover:underline text-gray-300 text-lg  '
                        >
                            Forget Your Password?
                        </a>
                    </div>

                    <Button className={'bg-green-600 '} type={'submit'}>
                        Sign In
                    </Button>
                </form>
            </div>
            <div className='w-[50%]'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className=' text-5xl mb-10'>Sign Up</h1>
                    <div className='flex flex-col items-center gap-4 mb-6 '>
                        <input
                            type='text'
                            placeholder='Name'
                            {...register('name')}
                            className='bg-transparent border-2 w-[80%] rounded-lg py-2 pl-2 hover:border-green-400 transition-all duration-[0.5s] outline-none focus:border-green-600'
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            {...register('email')}
                            className='bg-transparent border-2 w-[80%] rounded-lg py-2 pl-2 hover:border-green-400 transition-all duration-[0.5s] outline-none focus:border-green-600'
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            {...register('password')}
                            className='border-2 bg-transparent w-[80%] rounded-lg py-2 pl-2  hover:border-green-400 transition-all duration-[0.5s] outline-none focus:border-green-600'
                        />
                    </div>
                    <p className='text-gray-400'>
                        or use social login buttons for registration
                    </p>
                    <ul className='flex justify-center gap-12 my-6'>
                        <li>
                            <a href='#google' className='hover:text-green-500'>
                                <IoLogoGoogle size={25} />
                            </a>
                        </li>
                        <li>
                            <a href='#facebook'>
                                <IoLogoFacebook
                                    size={25}
                                    className='hover:text-green-500'
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href='#linkedin'
                                className='hover:text-green-500'
                            >
                                <IoLogoLinkedin size={25} />
                            </a>
                        </li>
                        <li>
                            <a href='#github' className='hover:text-green-500'>
                                <IoLogoGithub size={25} />
                            </a>
                        </li>
                    </ul>

                    <Button className={'bg-green-600'} type={'submit'}>
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Form;

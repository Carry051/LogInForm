import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { TiDeleteOutline } from 'react-icons/ti';

import Button from '../Components/Button';
import InputsField, { FormValues } from '../Components/InputsField';

import { socialLogoData } from './../data/socialLogoData';
import { inputsFormData } from '../data/inputsFormData';

const schema = yup
    .object({
        email: yup.string().required(),
        password: yup.string().required(),
        userName: yup.string()?.required(),
    })
    .required();

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const filteredInputsFormData = inputsFormData.filter((input) =>
        ['email', 'password'].includes(input.name)
    );

    const onSubmit: SubmitHandler<FormValues> = () => {
        alert(
            `Welcome to the Login Form. You successfully joined the login process.`
        );

        reset();
    };

    return (
        <div className='w-[50%]'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-5xl mb-10'>Sign In</h1>
                <div>
                    {filteredInputsFormData.map((data) => (
                        <div key={data.id}>
                            <div className='flex items-center justify-center mb-5 gap-3 '>
                                <InputsField
                                    type={data.type}
                                    placeholder={data.placeholder}
                                    name={data.name}
                                    register={register}
                                    className={
                                        errors[data.name] &&
                                        'focus:border-red-600 hover:border-red-400'
                                    }
                                />

                                <div>
                                    <p className='mb-2 w-1'>
                                        {errors[data.name] && (
                                            <TiDeleteOutline color='red' />
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className='text-gray-400'>or use social login buttons</p>
                <ul className='flex justify-center gap-12 my-6'>
                    {socialLogoData.map((logos, index) => {
                        const Icon = logos.logo;
                        return (
                            <li key={index} className='hover:text-green-500'>
                                <a href={logos.href}>
                                    <Icon size={25} />
                                </a>
                            </li>
                        );
                    })}
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
    );
};

export default LoginForm;

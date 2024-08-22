import { useForm, SubmitHandler } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../Components/Button';
import InputsField, { FormValues } from '../Components/InputsField';

import { inputsFormData } from '../data/inputsFormData';
import { socialLogoData } from '../data/socialLogoData';
import { TiDeleteOutline } from 'react-icons/ti';

const schema = yup
    .object({
        email: yup.string().required(),
        password: yup.string().required(),
        userName: yup.string().required(),
    })
    .required();

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmit2: SubmitHandler<FormValues> = (data) => {
        alert(`Sign up successful! Welcome to ${data.userName}.`);
        reset();
    };
    return (
        <div className='w-[50%]'>
            <form onSubmit={handleSubmit(onSubmit2)}>
                <h1 className=' text-5xl mb-10'>Sign Up</h1>
                <div className='flex flex-col'>
                    {inputsFormData.map((data) => (
                        <div key={data.id}>
                            <div className='flex items-center justify-center mb-5 gap-3'>
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
                                    <p className=' w-1'>
                                        {errors[data.name] && (
                                            <TiDeleteOutline color='red' />
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className='text-gray-400'>
                    or use social login buttons for registration
                </p>
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

                <Button className={'bg-green-600'} type={'submit'}>
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default RegisterForm;

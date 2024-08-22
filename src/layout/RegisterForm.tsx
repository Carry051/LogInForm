import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '../Components/Button';
import InputsField, { FormValues } from '../Components/InputsField';

import { inputsFormData } from '../data/inputsFormData';
import { socialLogoData } from '../data/socialLogoData';

const RegisterForm = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const onSubmit2: SubmitHandler<FormValues> = (data) => {
        alert(`Sign up successful! Welcome to ${data.name}.`);
        reset();
    };
    return (
        <div className='w-[50%]'>
            <form onSubmit={handleSubmit(onSubmit2)}>
                <h1 className=' text-5xl mb-10'>Sign Up</h1>
                <div className='flex flex-col gap-4 mb-6 '>
                    {inputsFormData.map((data) => (
                        <div key={data.id}>
                            <InputsField
                                type={data.type}
                                placeholder={data.placeholder}
                                name={data.name as keyof FormValues}
                                register={register}
                            />
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

import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '../Components/Button';
import InputsField, { FormValues } from '../Components/InputsField';

import { socialLogoData } from './../data/socialLogoData';
import { inputsFormData } from '../data/inputsFormData';

const LoginForm = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>();

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
                <div className='flex flex-col gap-4 mb-6 '>
                    {filteredInputsFormData.map((data) => (
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

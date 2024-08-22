import { FC } from 'react';

import { Resolver, UseFormRegister } from 'react-hook-form';

export type FormValues = {
    userName: string;
    email: string;
    password: string;
};

export type InputsFieldProps = {
    resolver?: Resolver<FormValues>;
    register: UseFormRegister<FormValues>;
    type: string;
    placeholder: string;
    name: keyof FormValues;
    className?: string;
};

const InputsField: FC<InputsFieldProps> = ({
    type,
    placeholder,
    name,
    register,
    className,
}) => {
    return (
        <input
            placeholder={placeholder}
            type={type}
            {...register(name)}
            className={`inputsField  ${className}`}
        />
    );
};

export default InputsField;

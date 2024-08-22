import { FC } from 'react';

import { UseFormRegister } from 'react-hook-form';

export type FormValues = {
    name?: string;
    email: string;
    password: string;
};

type InputsFieldProps = {
    type: string;
    placeholder: string;
    name: keyof FormValues;
    register: UseFormRegister<FormValues>;
};

const InputsField: FC<InputsFieldProps> = ({
    type,
    placeholder,
    name,
    register,
}) => {
    return (
        <input
            required
            placeholder={placeholder}
            type={type}
            {...register(name)}
            className='inputsField'
        />
    );
};

export default InputsField;

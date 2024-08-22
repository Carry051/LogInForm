import { FormValues } from '../Components/InputsField';

type inputsFormDataProps = {
    id: string;
    type: string;
    placeholder: string;
    name: keyof FormValues;
};

export const inputsFormData: inputsFormDataProps[] = [
    {
        id: '1',
        type: 'text',
        placeholder: 'Name',
        name: 'userName',
    },
    {
        id: '2',
        type: 'email',
        placeholder: 'Email',
        name: 'email',
    },
    {
        id: '3',
        type: 'password',
        placeholder: 'Password',
        name: 'password',
    },
];

import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

type SignUpInputProps = {
    type: 'text' | 'password' | 'number' | 'email';
    placeholder: string;
    error: FieldError | undefined;
    register: UseFormRegisterReturn<string>;
};

const SignUpInput: React.FC<SignUpInputProps> = ({ type, placeholder, register, error }) => {
    return <input className={`sign-up__form--input ${error && 'sign-up__form--input--error'} u-margin-top-small`} type={type} placeholder={placeholder} {...register} />;
};

export default SignUpInput;

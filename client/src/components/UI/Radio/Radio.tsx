import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type RadioProps = {
    label: string;
    value: string;
    register: UseFormRegisterReturn<string>;
};

const Radio: React.FC<RadioProps> = ({ register, value, label }) => {
    return (
        <>
            <input type="radio" id={value} value={value} {...register} />
            <label htmlFor={value}>{label}</label>
        </>
    );
};

export default Radio;

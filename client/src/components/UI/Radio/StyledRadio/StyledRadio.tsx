import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

type StyledRadioProps = {
    value: string;
    label: string;
    register: UseFormRegisterReturn<string>;
    error?: FieldError | undefined;
};

const StyledRadio: React.FC<StyledRadioProps> = ({ register, value, label, error }) => {
    return (
        <div className="sell__details__radio-group u-margin-bottom-small">
            <input type="radio" className="sell__details__radio-input" id={value} value={value} {...register} />
            <label htmlFor={value} className="sell__details__radio-label">
                <span className={`sell__details__radio-button ${error && 'sell__details__radio-button-error'}`}></span>
                {label}
            </label>
        </div>
    );
};

export default StyledRadio;

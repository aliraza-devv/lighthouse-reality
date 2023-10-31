import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Autocomplete } from '@react-google-maps/api';

import { RealtorInputSchema } from '../../utils/yupSchema';
import { RealtorFormValues } from '../../types';

type InputDoubleProps = {
    smallPH: string;
    largePH: string;
    formSubmit: SubmitHandler<RealtorFormValues>;
};

const InputDouble: React.FC<InputDoubleProps> = ({ smallPH, largePH, formSubmit }) => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<RealtorFormValues>({ resolver: yupResolver(RealtorInputSchema) });

    return (
        <form className="InputDouble__search" onSubmit={handleSubmit(formSubmit)}>
            <input id="name" type="text" className="InputDouble__search__input InputDouble__search__input--small" placeholder={smallPH} {...register('name')} />
            <Autocomplete options={{ types: ['(cities)'] }}>
                <input id="city" type="text" className={`InputDouble__search__input ${errors.city && 'InputDouble__search__input--error'}`} placeholder={largePH} {...register('city')} />
            </Autocomplete>
            <button type="submit" className="btn btn--rec">
                Search
            </button>
        </form>
    );
};

export default InputDouble;

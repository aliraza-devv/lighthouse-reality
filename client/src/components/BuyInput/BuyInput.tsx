import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSearchParams } from 'react-router-dom';
import { Autocomplete } from '@react-google-maps/api';

import { BuyFormValues } from '../../types';
import { BuyFormSchema } from '../../utils/yupSchema';
import { Search } from '../UI/svgComponents/index';

type InputDropdownProps = {
    formSubmit: SubmitHandler<BuyFormValues>;
};

const InputDropdown: React.FC<InputDropdownProps> = ({ formSubmit }) => {
    const [searchParams] = useSearchParams();

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<BuyFormValues>({ resolver: yupResolver(BuyFormSchema) });

    return (
        <form className="InputDropdown__search" onSubmit={handleSubmit(formSubmit)}>
            <Autocomplete options={{ types: ['(cities)'] }}>
                <input type="text" className={`InputDropdown__search__input ${errors.city && 'InputDropdown__search__input--error'}`} placeholder="Enter City" {...register('city')} />
            </Autocomplete>
            <select
                className={`InputDropdown__search__options InputDropdown__search__options-main ${(errors.for || errors.city) && 'InputDropdown__search__options-main--error'}`}
                defaultValue={searchParams.get('rent') ? 'rent' : 'sell'}
                {...register('for')}
            >
                <option value="sell">Buy</option>
                <option value="rent">Rent</option>
            </select>
            <button type="submit" className="InputDropdown__search--icon">
                <Search />
            </button>
        </form>
    );
};

export default InputDropdown;

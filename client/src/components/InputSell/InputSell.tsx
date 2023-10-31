import React from 'react';

import { Autocomplete } from '@react-google-maps/api';

type InputSimpleProps = {
    holderText: string;
    btnText: string;
    changed: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submit: (e: React.SyntheticEvent) => void;
};

const InputSimple: React.FC<InputSimpleProps> = ({ submit, changed, holderText, btnText }) => {
    return (
        <form className="Simple__search" onSubmit={submit}>
            <Autocomplete options={{ types: ['(cities)'] }}>
                <input type="text" className="Simple__search__input" placeholder={holderText} onChange={changed} required />
            </Autocomplete>
            <button type="submit" className="btn btn--rec">
                {btnText}
            </button>
        </form>
    );
};

export default InputSimple;

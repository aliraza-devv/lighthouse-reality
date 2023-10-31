import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Radio from '../UI/Radio/Radio';
import StyledRadio from '../UI/Radio/StyledRadio/StyledRadio';
import { BeginCardFormValues } from '../../types';
import { BeginCardSchema } from '../../utils/yupSchema';

type BeginCardProps = {
    formSubmit: SubmitHandler<BeginCardFormValues>;
};

const BeginCard: React.FC<BeginCardProps> = ({ formSubmit }) => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<BeginCardFormValues>({ resolver: yupResolver(BeginCardSchema) });

    return (
        <form className="sell__details__card" onSubmit={handleSubmit(formSubmit)}>
            <p className="sell__details__card-heading">Begin Posting your Property</p>
            <p className="sell__details__card-heading-sub">You want to</p>
            <div className={`radio-toolbar ${errors.for && 'radio-toolbar-error'}`}>
                <Radio label="Sell" value="sell" register={{ ...register('for') }} />
                <Radio label="Rent" value="rent" register={{ ...register('for') }} />
            </div>
            <p className="sell__details__card-heading-sub">And its a</p>
            <StyledRadio value="residential" label="Residential" register={{ ...register('type') }} error={errors.type} />
            <StyledRadio value="commercial" label="Commercial" register={{ ...register('type') }} error={errors.type} />
            <div className={`radio-toolbar ${errors.kind && 'radio-toolbar-error'} u-margin-top-small`}>
                <Radio label="House" value="house" register={{ ...register('kind') }} />
                <Radio label="Apartment" value="apartment" register={{ ...register('kind') }} />
                <Radio label="Villa" value="villa" register={{ ...register('kind') }} />
                <Radio label="Farmhouse" value="farmhouse" register={{ ...register('kind') }} />
                <Radio label="Land" value="land" register={{ ...register('kind') }} />
                <Radio label="Other" value="other" register={{ ...register('kind') }} />
            </div>
            <button type="submit" className="btn btn--rec u-margin-top-small">
                Begin to post property
            </button>
        </form>
    );
};

export default BeginCard;

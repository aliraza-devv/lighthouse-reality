import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Autocomplete } from '@react-google-maps/api';
import { ApolloError } from '@apollo/client';

import { FinalCardFormValues } from '../../types';
import { FinalCardSchema } from '../../utils/yupSchema';
import { LoaderSvg } from '../../assets/svg';
import FormError from '../UI/FormError/FormError';

type FinalCardProps = {
    formSubmit: SubmitHandler<FinalCardFormValues>;
    imgLoading: boolean;
    loading: boolean;
    error: ApolloError | undefined;
};

const FinalCard: React.FC<FinalCardProps> = ({ formSubmit, imgLoading, loading, error }) => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<FinalCardFormValues>({ resolver: yupResolver(FinalCardSchema) });

    return (
        <form className="sell__details__card" onSubmit={handleSubmit(formSubmit)}>
            {error && <FormError msg="Something went Wrong. Try Again!" />}
            <p className="sell__details__card-heading-sub u-margin-bottom-small">Upload Property Images</p>
            {imgLoading ? (
                <img className="sell__details__card--loader" src={LoaderSvg} alt="loading.." />
            ) : (
                <label className="sign-up__form--upload-button btn btn--rec btn--small">
                    <input type="file" accept="image/*" multiple placeholder="Upload" {...register('images')} />
                    Choose Files (Max 4)
                </label>
            )}
            {errors.images && (
                <div className="sign-up__form--error-div u-center-text">
                    <span className="sign-up__form--error">{errors.images.message}</span>
                </div>
            )}
            <p className="sell__details__card-heading-sub u-margin-bottom-small">Property Details</p>
            <Autocomplete options={{ types: ['(cities)'] }}>
                <input className={`sign-up__form--input ${errors.city && 'sign-up__form--input--error'} u-margin-bottom-small`} type="text" placeholder="City, Address" {...register('city')} />
            </Autocomplete>

            <textarea
                className={`sign-up__form--input ${errors.description && 'sign-up__form--input--error'} textareaD`}
                rows={4}
                cols={4}
                placeholder="Property Description"
                {...register('description')}
            />
            {errors.description && errors.description.type !== 'required' && (
                <div className="sign-up__form--error-div u-center-text">
                    <span className="sign-up__form--error">{errors.description.message}</span>
                </div>
            )}

            <div className="sign-up__form--single-line u-margin-top-small">
                <p className="input-label">Total Area (sqft): </p>
                <input className={`sign-up__form--input sign-up__form--input--small ${errors.area && 'sign-up__form--input--error'}`} type="number" placeholder="Total Area" {...register('area')} />
            </div>

            <div className="sign-up__form--single-line u-margin-top-small">
                <p className="input-label">Total Rooms: </p>
                <input className={`sign-up__form--input sign-up__form--input--small ${errors.rooms && 'sign-up__form--input--error'}`} type="number" placeholder="Total Rooms" {...register('rooms')} />
            </div>

            <div className="sign-up__form--single-line u-margin-top-small">
                <p className="input-label">Total Bathrooms: </p>
                <input
                    className={`sign-up__form--input sign-up__form--input--small ${errors.bathrooms && 'sign-up__form--input--error'}`}
                    type="number"
                    placeholder="Total Bathrooms"
                    {...register('bathrooms')}
                />
            </div>

            <div className="sign-up__form--single-line u-margin-top-small">
                <p className="input-label">Expected Price: </p>
                <input className={`sign-up__form--input sign-up__form--input--small ${errors.price && 'sign-up__form--input--error'}`} type="number" placeholder="Price" {...register('price')} />
            </div>
            {loading ? (
                <img className="sell__details__card--loader" src={LoaderSvg} alt="loading.." />
            ) : (
                <button type="submit" className="btn btn--rec u-margin-top-small">
                    Begin to post property
                </button>
            )}
        </form>
    );
};

export default FinalCard;

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ApolloError } from '@apollo/client';
import { Autocomplete } from '@react-google-maps/api';

import FormHeader from '../UI/FormHeader/FormHeader';
import SignUpInput from './SignUpInput/SignUpInput';
import FormError from '../UI/FormError/FormError';
import { SignUpFormSchema } from '../../utils/yupSchema';
import { SignUpFormValues } from '../../types';
import { LoaderSvg } from '../../assets/svg';

type SignUpFormProps = {
    loading: boolean;
    error: ApolloError | undefined;
    formSubmit: SubmitHandler<SignUpFormValues>;
};

const SignUpForm: React.FC<SignUpFormProps> = ({ formSubmit, error, loading }) => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<SignUpFormValues>({ resolver: yupResolver(SignUpFormSchema) });

    return (
        <form className="sign-up__form" onSubmit={handleSubmit(formSubmit)}>
            <FormHeader heading="Work with us" subHeading="Become a member at Lighthouse Realty by just entering your information and start Selling." />

            {error && <FormError msg={error.message} />}

            <SignUpInput type="text" placeholder="Username" register={register('userName')} error={errors.userName} />

            <SignUpInput type="text" placeholder="Full Name" register={register('fullName')} error={errors.fullName} />

            <SignUpInput type="email" placeholder="Email" register={register('email')} error={errors.email} />

            <SignUpInput type="password" placeholder="Password" register={register('password')} error={errors.password} />
            {errors.password && errors.password.type !== 'required' && (
                <div className="sign-up__form--error-div">
                    <span className="sign-up__form--error">{errors.password.message}</span>
                </div>
            )}
            <Autocomplete options={{ types: ['(cities)'] }}>
                <SignUpInput type="text" placeholder="City" register={register('city')} error={errors.city} />
            </Autocomplete>

            <textarea
                className={`sign-up__form--input ${errors.bio && 'sign-up__form--input--error'} u-margin-top-small textareaD`}
                rows={4}
                cols={4}
                placeholder="About Yourself"
                {...register('bio')}
            />
            {errors.bio && errors.bio.type !== 'required' && (
                <div className="sign-up__form--error-div u-center-text">
                    <span className="sign-up__form--error">{errors.bio.message}</span>
                </div>
            )}

            <div className="sign-up__form--single-line u-margin-top-small">
                <label className="input-label" htmlFor="specialization">
                    Specialization:
                </label>
                <select id="specialization" className="sign-up__form--select" {...register('specialization')}>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                </select>
            </div>

            <div className="sign-up__form--single-line u-margin-top-small">
                <p className="input-label">Sold Properties: </p>
                <input
                    className={`sign-up__form--input sign-up__form--input--small ${errors.sold && 'sign-up__form--input--error'}`}
                    type="number"
                    placeholder="Total Sold Properties"
                    {...register('sold')}
                />
            </div>
            {errors.sold && (
                <div className="sign-up__form--error-div">
                    <span className="sign-up__form--error">{errors.sold.message}</span>
                </div>
            )}

            <div className="sign-up__form--single-line u-margin-top-small">
                <p className="input-label">Your Experience: </p>
                <input
                    className={`sign-up__form--input sign-up__form--input--small ${errors.experience && 'sign-up__form--input--error'}`}
                    type="number"
                    placeholder="Total Experience"
                    {...register('experience')}
                />
            </div>
            {errors.experience && (
                <div className="sign-up__form--error-div">
                    <span className="sign-up__form--error">{errors.experience.message}</span>
                </div>
            )}

            <div className="sign-up__form--single-line u-margin-top-small">
                <p className="input-label">Profile Image: </p>
                <label className="sign-up__form--upload-button btn btn--rec btn--small">
                    <input type="file" accept="image/*" placeholder="Upload" {...register('avatarImage')} />
                    Choose File
                </label>
            </div>

            {loading ? (
                <div>
                    <img className="sign-up__form--loader" src={LoaderSvg} alt="loading.." />
                </div>
            ) : (
                <button className="btn btn--rec sign-up__form--btn u-margin-top-small" type="submit">
                    Sign Up
                </button>
            )}
        </form>
    );
};

export default SignUpForm;

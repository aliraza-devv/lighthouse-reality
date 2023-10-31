import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ContactFormValues } from '../../types';
import { ContactFormSchema } from '../../utils/yupSchema';
import { LoaderSvg } from '../../assets/svg';
import FormError from '../UI/FormError/FormError';
import FormHeader from '../UI/FormHeader/FormHeader';
import { ApolloError } from '@apollo/client';

type ContactFormProps = {
    address: string;
    error: ApolloError | undefined;
    loading: boolean;
    formSubmit: SubmitHandler<ContactFormValues>;
    single?: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({ address, error, loading, formSubmit, single }) => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<ContactFormValues>({ resolver: yupResolver(ContactFormSchema) });

    return (
        <form className="login__form u-margin-bottom-small color-primary" onSubmit={handleSubmit(formSubmit)}>
            <FormHeader heading="Interested ?" subHeading={single ? 'Contact this Agent just by filling your Information' : 'Contact the selling Agent of this Property just by filling your Info'} />
            {error && <FormError msg="Something went Wrong!" />}
            <input className={`input__normal u-margin-top-small ${errors.name && 'sign-up__form--input--error'}`} type="text" placeholder="Name" {...register('name')} />

            <input className={`input__normal u-margin-top-small ${errors.phone && 'sign-up__form--input--error'}`} type="number" placeholder="Phone" {...register('phone')} />
            <input className={`input__normal u-margin-top-small ${errors.email && 'sign-up__form--input--error'}`} type="text" placeholder="Email" {...register('email')} />

            <textarea
                className={`input__normal ${errors.message && 'sign-up__form--input--error'} u-margin-top-small textareaD u-mx-auto`}
                rows={4}
                cols={4}
                defaultValue={`I am interested in ${address}.`}
                placeholder="About Property"
                {...register('message')}
            />
            {errors.message && errors.message.type !== 'required' && (
                <div className="sign-up__form--error-div">
                    <span className="sign-up__form--error">{errors.message.message}</span>
                </div>
            )}

            {loading ? (
                <div className="login__form--loader u-margin-top-small">
                    <img className="login__form--loader-svg" src={LoaderSvg} alt="loading.." />
                </div>
            ) : (
                <button className="btn btn--rec u-margin-top-small" type="submit">
                    Contact Realtor
                </button>
            )}
        </form>
    );
};

export default ContactForm;

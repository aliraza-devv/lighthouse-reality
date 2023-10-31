import React from 'react';

import ContactForm from '../../../ContactForm/ContactForm';
import { ContactFormValues } from '../../../../types';
import { PropertyDetails } from '../../../../assets/svg';
import { SubmitHandler } from 'react-hook-form';
import { ApolloError } from '@apollo/client';

type ContactRealtorSingleProps = {
    open: boolean;
    onClose: () => void;
    city: string;
    id: string;
    formSubmit: SubmitHandler<ContactFormValues>;
    loading: boolean;
    error: ApolloError | undefined;
};

const ContactRealtorSingle: React.FC<ContactRealtorSingleProps> = ({ open, onClose, city, formSubmit, loading, error }) => {
    if (!open) return null;
    return (
        <div className="popup" id="house-popup">
            <p className="popup__close" onClick={onClose}>
                X
            </p>
            <div className="popup__content">
                <div className="popup__left">
                    <img src={PropertyDetails} alt="tours" className="popup__img" />
                </div>

                <div className="popup__right">
                    <div>
                        <ContactForm address={city} formSubmit={formSubmit} loading={loading} error={error} single={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactRealtorSingle;

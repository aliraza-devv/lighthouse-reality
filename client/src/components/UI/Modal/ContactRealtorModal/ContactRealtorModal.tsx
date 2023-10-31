import React from 'react';
import { ApolloError } from '@apollo/client';

import ContactForm from '../../../ContactForm/ContactForm';
import { ContactFormValues, Property } from '../../../../types';
import { PropertyDetails } from '../../../../assets/svg';
import { SubmitHandler } from 'react-hook-form';

type ContactRealtorModalProps = {
    open: Boolean;
    onClose: () => void;
    property: Property;
    loading: boolean;
    error: ApolloError | undefined;
    formSubmit: SubmitHandler<ContactFormValues>;
};

const ContactRealtorModal: React.FC<ContactRealtorModalProps> = ({ open, onClose, property, loading, error, formSubmit }) => {
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
                        <ContactForm address={property.city} formSubmit={formSubmit} loading={loading} error={error} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactRealtorModal;

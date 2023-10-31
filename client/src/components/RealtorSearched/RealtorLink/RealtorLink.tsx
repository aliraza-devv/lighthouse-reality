import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { usePropertyReq } from '../../../graphql/hooks';
import { ContactFormValues, Realtor } from '../../../types';
import ContactRealtorSingle from '../../UI/Modal/ContactRealtorSingle/ContactRealtorSingle';
import SuccessContactModal from '../../UI/Modal/SuccessContactModal/SuccessContactModal';

type RealtorLinkProps = {
    realtor: Realtor;
};

const RealtorLink: React.FC<RealtorLinkProps> = ({ realtor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);

    const { makeReq, loading, error } = usePropertyReq();

    const formSubmit: SubmitHandler<ContactFormValues> = async (data) => {
        await makeReq({
            name: data.name,
            email: data.email,
            phone: data.phone.toString(),
            message: data.message,
            id: realtor.id
        });

        setIsOpen(false);
        setSuccessOpen(true);
    };

    return (
        <>
            <div className="realtor__top-box" onClick={() => setIsOpen(true)}>
                <div className="profile no-margin">
                    <img className="profile__img" src={realtor.avatarImage} alt="realtor" />
                    <div className="profile__details">
                        <p className="profile__name">{realtor.fullName}</p>
                        <span className="profile__span">{realtor.sold} Houses Sold</span>
                    </div>
                </div>
            </div>
            <ContactRealtorSingle open={isOpen} onClose={() => setIsOpen(false)} city={realtor.city} id={realtor.id} loading={loading} error={error} formSubmit={formSubmit} />
            <SuccessContactModal open={successOpen} onClose={() => setSuccessOpen(false)} />
        </>
    );
};

export default RealtorLink;

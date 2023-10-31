import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { usePropertyReq } from '../../graphql/hooks';
import PropertyDetailModal from '../UI/Modal/PropertyDetailModal/PropertyDetailModal';
import ContactRealtorModal from '../UI/Modal/ContactRealtorModal/ContactRealtorModal';
import SuccessContactModal from '../UI/Modal/SuccessContactModal/SuccessContactModal';
import { ContactFormValues, Property } from '../../types';
import { AddressSvg, DollarSvg, DotSvg } from '../../assets/svg';

type PropertyCardProps = {
    property: Property;
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    const [openDModal, setOpenDModal] = useState(false);
    const [openCModal, setOpenCModal] = useState(false);
    const [openSModal, setOpenSModal] = useState(false);

    const { makeReq, loading, error } = usePropertyReq();

    const contactRealtor = () => {
        setOpenDModal(false);
        setOpenCModal(true);
    };

    const formSubmit: SubmitHandler<ContactFormValues> = async (data) => {
        await makeReq({ id: property.realtor.id, name: data.name, email: data.email, phone: data.phone.toString(), message: data.message });
        setOpenCModal(false);
        setOpenSModal(true);
    };

    return (
        <>
            <div className="searched__houses__card" onClick={() => setOpenDModal(true)}>
                <div className="searched__houses__card-details">
                    <div className="searched__houses__card-details-price">
                        <img className="u-margin-left-mini" src={DollarSvg} alt="dollar" />
                        <p className="para-secondary-bold u-margin-left-mini">{property.price}</p>
                    </div>
                    <div className="searched__houses__card-details-address">
                        <img className="u-margin-left-mini" src={AddressSvg} alt="address" />
                        <p className="para-secondary u-margin-left-mini">{property.city}</p>
                    </div>
                    <div className="searched__houses__card-details-buy">
                        <img className="u-margin-left-mini" src={DotSvg} alt="dot" />
                        <p className="para-secondary u-margin-left-mini">
                            {property.kind} for {property.for}
                        </p>
                    </div>
                    <div className="searched__houses__card-details-rooms">
                        <p className="para-secondary para-secondary-j u-margin-right-mini">
                            {property.rooms} bds | {property.bathrooms} ba | {property.area}sqft
                        </p>
                    </div>
                    <img className="searched__houses__card-details-img" src={property.images[0]} alt="property" />
                </div>
            </div>
            <PropertyDetailModal open={openDModal} onClose={() => setOpenDModal(false)} property={property} contactRealtor={contactRealtor} />
            <ContactRealtorModal open={openCModal} onClose={() => setOpenCModal(false)} property={property} loading={loading} error={error} formSubmit={formSubmit} />
            <SuccessContactModal open={openSModal} onClose={() => setOpenSModal(false)} />
        </>
    );
};

export default PropertyCard;

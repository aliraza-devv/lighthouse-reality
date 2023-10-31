import React from 'react';

import { AddressSvg, DollarSvg, DotSvg } from '../../assets/svg';
import { Property } from '../../types';

type ListingCardProps = {
    property: Property;
};

const ListingCard: React.FC<ListingCardProps> = ({ property }) => {
    return (
        <div className="searched__houses__card">
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
    );
};

export default ListingCard;

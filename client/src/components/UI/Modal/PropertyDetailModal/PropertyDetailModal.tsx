import React, { useState } from 'react';

import { BedSvg, BathSvg, LocSvg } from '../../../../assets/svg';
import { Property } from '../../../../types';

type PropertyDetailModalProps = {
    open: Boolean;
    onClose: () => void;
    contactRealtor: () => void;
    property: Property;
};

const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ open, onClose, property, contactRealtor }) => {
    const [img, setImage] = useState(property.images[0]);

    const handleClick = (i: number) => {
        setImage(property.images[i]);
    };

    if (!open) return null;
    return (
        <div className="popup" id="house-popup">
            <p className="popup__close" onClick={onClose}>
                X
            </p>
            <div className="popup__content">
                <div className="popup__left popup__left-top">
                    <img className="searched__houses__card-details-img" src={img} alt="property" />

                    <div className="img-slider">
                        {property.images.map((url, i) => (
                            <img key={i} className={`house_interior ${i === property.images.indexOf(img) && 'house_interior--selected'}`} src={url} alt="interior" onClick={() => handleClick(i)} />
                        ))}
                    </div>
                </div>

                <div className="popup__right popup__right-top">
                    <h2 className="heading-medium u-margin-bottom-small">
                        $ {property.price} <span className="paragraph-medium para-fade">{property.area} sqft</span>
                    </h2>
                    <div className="para-with-icon u-margin-top-small">
                        <img src={BedSvg} alt="bedrooms" />
                        <p className="heading-mini u-margin-left-small">{property.rooms} Bedrooms</p>
                    </div>
                    <div className="para-with-icon u-margin-top-small">
                        <img src={BathSvg} alt="bathroom" />
                        <p className="heading-mini u-margin-left-small">{property.bathrooms} Bathrooms</p>
                    </div>
                    <div className="para-with-icon u-margin-top-small">
                        <img src={LocSvg} alt="address" />
                        <p className="heading-mini u-margin-left-small">{property.city}</p>
                    </div>
                    <h2 className="heading-medium u-margin-top-small">Description</h2>
                    <p className="paragraph-primary paragraph-small-m">{property.description}</p>
                    <button className="btn btn--rec u-margin-top-small" onClick={contactRealtor}>
                        Contact Agent
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailModal;

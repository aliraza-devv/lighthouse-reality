import React from 'react';
import { Link } from 'react-router-dom';

import { RentalSvg } from '../../../../assets/svg/index';

type RentalModalProps = {
    open: Boolean;
    onClose: () => void;
};

const RentalModal: React.FC<RentalModalProps> = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div className="popup" id="popup">
            <p className="popup__close" onClick={onClose}>
                X
            </p>
            <div className="popup__content">
                <div className="popup__left">
                    <img src={RentalSvg} alt="tours" className="popup__img" />
                </div>
                <div className="popup__right">
                    <h2 className="popup__heading u-margin-bottom-small">Find Properties on Rent</h2>
                    <p className="popup__text u-margin-bottom-small">Search millions of apartments and houses with Lighthouse Realty.</p>
                    <Link onClick={onClose} to="buy?rent=true" className="btn btn--primary dec__padding">
                        Find out
                    </Link>
                    <h2 className="popup__heading u-margin-bottom-small">Want to give your property on Rent ?</h2>
                    <p className="popup__text u-margin-bottom-small">with the help of 2.5 million users your property will be on rent fast.</p>
                    <Link onClick={onClose} to="/realtors" className="btn btn--primary dec__padding">
                        Start posting
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RentalModal;

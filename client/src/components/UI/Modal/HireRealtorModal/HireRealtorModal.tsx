import React from 'react';
import { Link } from 'react-router-dom';

type HireRealtorModalProps = {
    open: Boolean;
    onClose: () => void;
};

const HireRealtorModal: React.FC<HireRealtorModalProps> = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div className="popup" id="popup-realtor">
            <p className="popup__close" onClick={onClose}>
                X
            </p>
            <div className="popup__content">
                <div className="popup__left">
                    <img src="/svg/hire__realtor.svg" alt="Hire Realtor" className="popup__img" />
                </div>
                <div className="popup__right">
                    <h2 className="popup__heading u-margin-bottom-small">Hire our best Realtors</h2>
                    <p className="popup__text u-margin-bottom-small">With the help of realtors, you can sell your property even more fast and in your expected price.</p>
                    <Link to="realtor" className="btn btn--rec">
                        Hire Realtors
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HireRealtorModal;

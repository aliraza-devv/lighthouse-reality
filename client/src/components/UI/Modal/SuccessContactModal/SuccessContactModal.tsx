import React from 'react';

import { ConfirmSvg } from '../../../../assets/svg';

type SuccessContactModalProps = {
    open: Boolean;
    onClose: () => void;
};

const SuccessContactModal: React.FC<SuccessContactModalProps> = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div className="popup">
            <p className="popup__close" onClick={onClose}>
                X
            </p>
            <div className="popup__content">
                <div className="popup__top">
                    <h2 className="popup__heading u-margin-bottom-small">We successfully received your information. We contacting you Soon !</h2>
                    <img src={ConfirmSvg} alt="confirm" className="popup__top__img" />
                </div>
            </div>
        </div>
    );
};

export default SuccessContactModal;

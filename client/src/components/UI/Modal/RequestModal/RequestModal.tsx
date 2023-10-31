import React from 'react';
import { EmailSvg } from '../../../../assets/svg';

import { UserDarkSvg } from '../../../../assets/svg';
import { Phone } from '../../svgComponents';
import { Request } from '../../../../types';

type RequestModalProps = {
    open: boolean;
    onClose: () => void;
    client: Request;
};

const RequestModal: React.FC<RequestModalProps> = ({ open, onClose, client }) => {
    if (!open) return null;
    return (
        <div className="popup">
            <p className="popup__close" onClick={onClose}>
                X
            </p>
            <div className="popup__content">
                <div className="popup__top">
                    <h2 className="popup__heading u-margin-bottom-small">Client Data</h2>
                    <div className="user__contact-details">
                        <div className="realtor__details--popup-text">
                            <img src={UserDarkSvg} alt="email" />
                            <p className="popup__text u-margin-bottom-small">{client.name}</p>
                        </div>
                        <div className="realtor__details--popup-text">
                            <img src={EmailSvg} alt="email" />
                            <p className="popup__text u-margin-bottom-small">{client.email}</p>
                        </div>
                        <div className="realtor__details--popup-text">
                            <Phone />
                            <p className="popup__text u-margin-bottom-small">{client.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestModal;

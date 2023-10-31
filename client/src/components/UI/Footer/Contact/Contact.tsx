import React from 'react';

type ContactProps = {
    address: string;
    children: React.ReactNode;
};

const Contact: React.FC<ContactProps> = ({ address, children }) => {
    return (
        <div className="footer__contact">
            {children}
            &nbsp;<p className="footer__links__text">&nbsp;{address}</p>
        </div>
    );
};

export default Contact;

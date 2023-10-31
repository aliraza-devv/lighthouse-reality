import React from 'react';
import { Link } from 'react-router-dom';

type ServicesCardProps = {
    heading: string;
    paragraph: string;
    btnText: string;
    to: string;
    children: React.ReactNode;
};

const ServicesCard: React.FC<ServicesCardProps> = ({ heading, paragraph, btnText, children, to }) => {
    return (
        <div className="services__container__card">
            {children}
            <p className="services__container__card__heading">{heading}</p>
            <p className="services__container__card__text">{paragraph}</p>
            <Link to={to} className="btn-text">
                {btnText}
            </Link>
        </div>
    );
};

export default ServicesCard;

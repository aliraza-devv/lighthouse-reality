import React from 'react';
import { Link } from 'react-router-dom';

const Subscribe: React.FC = () => {
    return (
        <div className="footer__right">
            <p className="footer__heading u-margin-bottom-small u-margin-top-medium">Subscribe for Latest Properties</p>
            <input type="email" className="footer__input u-margin-bottom-small" placeholder="Enter your E-mail" /> <br />
            <Link to="/" className="btn btn--primary dec__padding">
                Subscribe
            </Link>
        </div>
    );
};

export default Subscribe;

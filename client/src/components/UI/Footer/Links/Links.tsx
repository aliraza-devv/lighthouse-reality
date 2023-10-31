import React from 'react';

import LinkBox from './LinkBox/LinkBox';

const Links: React.FC = () => {
    return (
        <div className="footer__links">
            <div>
                <LinkBox to="/buy" text="Buy" />
                <LinkBox to="/sell" text="Sell" />
                <LinkBox to="/buy?rent=true" text="Rental" />
            </div>
            <div>
                <LinkBox to="/login" text="Login" />
                <LinkBox to="/signup" text="Work with us" />
                <LinkBox to="/realtors" text="Our Realtors" />
            </div>
        </div>
    );
};

export default Links;

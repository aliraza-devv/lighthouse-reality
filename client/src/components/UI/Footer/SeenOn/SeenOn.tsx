import React from 'react';

import { LogoDark, LogoBBC, LogoBi, LogoForbes, LogoTech } from '../../../../assets/image/index';

const SeenOn: React.FC = () => {
    return (
        <div className="footer__center">
            <div className="footer__seenon-text">Seen on</div>
            <div className="footer__seenon-logos">
                <img src={LogoForbes} alt="Seen on" />
                <img className="end" src={LogoBBC} alt="Seen on" />
                <img src={LogoTech} alt="Seen on" />
                <img className="end" src={LogoBi} alt="Seen on" />
            </div>
            <img className="footer__logo" src={LogoDark} alt="Seen on" />
        </div>
    );
};

export default SeenOn;

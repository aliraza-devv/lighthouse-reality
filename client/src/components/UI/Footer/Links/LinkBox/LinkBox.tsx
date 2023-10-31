import React from 'react';
import { Link } from 'react-router-dom';

import { LinkArrow } from '../../../svgComponents/index';

type LinkBoxProps = {
    to: string;
    text: string;
};

const LinkBox: React.FC<LinkBoxProps> = ({ to, text }) => {
    return (
        <div>
            <LinkArrow />
            &nbsp;
            <Link to={to} className="footer__links__text">
                {text}
            </Link>
        </div>
    );
};

export default LinkBox;

import React from 'react';
import { Link } from 'react-router-dom';

import bgVideo from '../../assets/video/cover.mp4';
import Navbar from '../Navbar/Navbar';
import HeaderContent from './HeaderContent/HeaderContent';
import { RightArrowLight } from '../UI/svgComponents/index';

const HeaderMain: React.FC = () => {
    return (
        <header className="header">
            <div className="header__bg-video">
                <video className="header__bg-video__content" autoPlay muted loop>
                    <source src={bgVideo} type="video/mp4" />
                    <source src={bgVideo} type="video/webm" />
                    YOUR BROWSER IS NOT SUPPORTS THIS VIDEO
                </video>
            </div>
            <Navbar navClass="header__navbar u-margin-bottom-medium" />
            <HeaderContent />
            <Link className="header__btn btn btn--primary" to="/buy">
                Explore Properties <RightArrowLight className="btn--svg" />
            </Link>
        </header>
    );
};

export default HeaderMain;

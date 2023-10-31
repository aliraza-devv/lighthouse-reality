import React from 'react';
import { Link } from 'react-router-dom';

import { Couple, BeachHouse } from '../../assets/image/index';
import { RightArrowLight, BackgroundLeft, BackgroundRound } from '../UI/svgComponents/index';

const FindHome: React.FC = () => {
    return (
        <section className="home">
            <div className="home__pictures">
                <img src={Couple} alt="Couple with new House" className="home__img--1" />
                <img src={BeachHouse} alt="Couple with new House" className="home__img--2" />
            </div>
            <div className="home__content">
                <h2 className="home__heading">&ldquo;The best decision of our lives&rdquo;</h2>
                <p className="home__text">Lighthouse Realty serves properties including houses, apartments, villas, resorts on beaches of many countries through various convenient locations.</p>
                <p className="home__text">Trust, friendliness and dedication made Lighthouse Realty the most respected name in real estate business.</p>
                <Link className="btn btn--primary" to="/buy">
                    Explore Properties <RightArrowLight className="btn--svg" />
                </Link>
            </div>
            <div className="svg-1">
                <BackgroundLeft />
            </div>
            <div className="svg-2">
                <BackgroundRound />
            </div>
        </section>
    );
};

export default FindHome;

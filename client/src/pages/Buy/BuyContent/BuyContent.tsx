import React from 'react';

import LeftContent from './LeftContent/LeftContent';
import { BottomLeftSvg, TopRightSvg, BestPlacesSvg } from '../../../assets/svg/index';

const BuyContent: React.FC = () => {
    return (
        <section className="buy__best-places">
            <p className="heading-big u-margin-bottom-small">Let us Guide you Home</p>
            <p className="paragraph u-margin-bottom-small u-center-text">
                We have the most listings and constant updates. <br />
                So you'll never miss out.
            </p>
            <div className="buy__best-places__content">
                <div className="buy__best-places__content--left">
                    <p className="heading-medium u-margin-bottom-small">Popular Locations to buy Properties</p>
                    <LeftContent text="Alamitos Beach Long Beach, CA, USA" />
                    <LeftContent text="Santa Monica, California, USA" />
                    <LeftContent text="Sea Point, Cape Town, 8060, South Africa" />
                    <LeftContent text="Brighton Beach, Brooklyn, NY, USA" />
                    <LeftContent text="Ocean Beach, San Francisco, CA, United States" />
                </div>
                <img className="top__right" src={TopRightSvg} alt="top right" />
                <img className="bottom__left" src={BottomLeftSvg} alt="bottom right" />
                <img className="main-img" src={BestPlacesSvg} alt="best places" />
            </div>
        </section>
    );
};

export default BuyContent;

import React from 'react';

import ServicesCard from './ServicesCard/ServicesCard';
import { SellLink, BuyFromUs, RentalFromUs, WorkWithUs } from '../UI/svgComponents/index';

const Services: React.FC = () => {
    return (
        <section className="services">
            <p className="services__heading">Our Services</p>
            <div className="services__container">
                <ServicesCard
                    heading="Sell with us"
                    paragraph="Lighthouse Realty offers the absolute best exposure for selling your property.In turn, we increase the likelihood of a buyer finding the right property. "
                    btnText="Start Selling"
                    to="/sell"
                >
                    <SellLink />
                </ServicesCard>
                <ServicesCard
                    heading="Buy from us"
                    paragraph="Lighthouse Realty offers the best properties in your budget. Buying from us is easy process just give us location of your choice and start Buying.."
                    btnText="Start Buying"
                    to="/buy"
                >
                    <BuyFromUs />
                </ServicesCard>
                <ServicesCard
                    heading="Rental"
                    paragraph="Lighthouse Realty offers the absolute best exposure for selling your property.In turn, we increase the likelihood of a buyer finding the right property. "
                    btnText="Start Rental"
                    to="buy?rent=true"
                >
                    <RentalFromUs />
                </ServicesCard>
                <ServicesCard
                    heading="Work with us"
                    paragraph="Become the best agent you can be. Lighthouse Realty agents are the TOP TEAM in Real Estate and provides the training necessary for you"
                    btnText="Become Realtor"
                    to="signup"
                >
                    <WorkWithUs />
                </ServicesCard>
            </div>
        </section>
    );
};

export default Services;

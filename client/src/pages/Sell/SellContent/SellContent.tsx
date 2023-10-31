import React from 'react';
import { Link } from 'react-router-dom';

import { HireRealtorSvg } from '../../../assets/svg/index';

const SellContent: React.FC = () => {
    return (
        <section className="sell__hire__realtors">
            <p className="heading-big u-margin-bottom-medium">Find the right agent for you</p>
            <div className="sell__hire__realtors__content">
                <div className="sell__hire__realtors__content--left">
                    <p className="heading-medium">Agent pairing technology</p>
                    <p className="paragraph u-margin-bottom-small">
                        Our Real Estate agent pairing technology <br /> connects you with agents in real time for <br /> your selling and buying needs.
                    </p>
                    <p className="heading-medium">Personalized support</p>
                    <p className="paragraph u-margin-bottom-small">
                        Our team of experts will work with you until <br />
                        you've found the right selling agent.
                    </p>
                    <p className="heading-medium">Sell with ease</p>
                    <p className="paragraph u-margin-bottom-medium">Skip the listing process and move on your schedule.</p>
                    <Link to="/realtors" className="btn btn--rec">
                        Hire Realtor
                    </Link>
                </div>
                <img src={HireRealtorSvg} alt="Realtor SVG" />
            </div>
        </section>
    );
};

export default SellContent;

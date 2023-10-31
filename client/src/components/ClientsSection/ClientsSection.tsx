import React from 'react';

import Story from './Story/Story';
import { BackgroundRight, BackgroundDown } from '../UI/svgComponents/index';
import { client1, client2 } from '../../assets/image/index';

const Clients: React.FC = () => {
    return (
        <section className="clients">
            <div className="svg-left">
                <BackgroundRight className="clients__svg-bg" />
            </div>
            <div className="svg-down">
                <BackgroundDown />
            </div>
            <p className="clients__heading">Our Happy Clients</p>
            <Story
                clientImg={client1}
                clientName="Alex"
                clientReviewHeading="Thanks to brilliant Realtors I ever met"
                clientReview="Lighthouse Realty makes my dreams true, Their talented Realtors help me a lot to find me a beautiful home in just a week. They find me home of my choice and also in my budget as well"
            />
            <Story
                clientImg={client2}
                clientName="Malissa"
                clientReviewHeading="WOW! My life is completely different now"
                clientReview="I had property and I tried so hard to sell it but because the property is old and many people don't like this type of property. So, I contacted Lighthouse Realty and they sell it in only two days. "
            />
        </section>
    );
};

export default Clients;

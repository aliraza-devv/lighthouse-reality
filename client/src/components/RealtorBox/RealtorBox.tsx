import React from 'react';

import RealtorProfile from './RealtorProfile/RealtorProfile';

import { TopRealtor1, TopRealtor2, TopRealtor3, TopRealtor4 } from '../../assets/image/index';

const RealtorBox: React.FC = () => {
    return (
        <section className="realtor__top">
            <div className="realtor__top-box">
                <p className="realtor__top-heading">Meet the Top 12 of Lighthouse Realty</p>
                <p className="realtor__top-text">Find out how the experience realtors can help you get into your dream home.</p>
            </div>
            <RealtorProfile name="Max Smith" soldCount="126" img={TopRealtor1} />
            <RealtorProfile name="Rita Santos" soldCount="107" img={TopRealtor2} />
            <RealtorProfile name="Bob Padilla" soldCount="92" img={TopRealtor3} />
            <RealtorProfile name="Tamara Oliver" soldCount="84" img={TopRealtor2} />
            <RealtorProfile name="Marc Hunt" soldCount="82" img={TopRealtor3} />
            <RealtorProfile name="Tyrone Wagner" soldCount="77" img={TopRealtor4} />
            <RealtorProfile name="Freddie Sutton" soldCount="73" img={TopRealtor1} />
            <RealtorProfile name="Carly Simonds" soldCount="69" img={TopRealtor2} />
            <RealtorProfile name="Gerry Gordon" soldCount="65" img={TopRealtor4} />
            <RealtorProfile name="Mabel Bond" soldCount="62" img={TopRealtor2} />
            <RealtorProfile name="Ken Menzie" soldCount="43" img={TopRealtor3} />
            <RealtorProfile name="Oliver Carr" soldCount="26" img={TopRealtor1} />
        </section>
    );
};

export default RealtorBox;

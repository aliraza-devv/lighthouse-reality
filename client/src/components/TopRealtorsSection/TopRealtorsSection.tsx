import React from 'react';
import { Link } from 'react-router-dom';

import RealtorsDetail from './RealtorsDetail/RealtorsDetail';
import { TopRealtor1, TopRealtor2, TopRealtor3, TopRealtor4 } from '../../assets/image/index';

const TopRealtors: React.FC = () => {
    return (
        <section className="realtors">
            <h3 className="realtors__heading">Our Top Realtors</h3>
            <div className="realtors__list">
                <RealtorsDetail realtorImg={TopRealtor1} name="Max Smith" soldCount="256" />
                <RealtorsDetail realtorImg={TopRealtor2} name="Kate Morrison" soldCount="206" />
                <RealtorsDetail realtorImg={TopRealtor3} name="Christian Vega" soldCount="187" />
                <RealtorsDetail realtorImg={TopRealtor4} name="Toby Ramsey" soldCount="134" />
            </div>
            <Link to="/realtors" className="btn-text">
                Find out more
            </Link>
        </section>
    );
};

export default TopRealtors;

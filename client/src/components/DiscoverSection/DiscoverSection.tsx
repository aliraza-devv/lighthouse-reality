import React from 'react';

import DiscoverBox from './DiscoverBox/DiscoverBox';

const Discover: React.FC = () => {
    return (
        <section className="discover">
            <DiscoverBox heading="Family Houses" boxNo="1" />
            <DiscoverBox heading="Family Apartments" boxNo="2" />
            <DiscoverBox heading="Large Resorts" boxNo="3" />
            <DiscoverBox heading="Modern Glass Villa" boxNo="4" />
        </section>
    );
};

export default Discover;

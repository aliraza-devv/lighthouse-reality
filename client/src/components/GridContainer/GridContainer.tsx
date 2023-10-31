import React from 'react';

import ServicesSection from '../ServicesSection/ServicesSection';
import TopRealtorsSection from '../TopRealtorsSection/TopRealtorsSection';
import ClientsSection from '../ClientsSection/ClientsSection';

const GridContainer: React.FC = (props) => {
    return (
        <div className="container">
            <ServicesSection />
            <TopRealtorsSection />
            <ClientsSection />
        </div>
    );
};

export default GridContainer;

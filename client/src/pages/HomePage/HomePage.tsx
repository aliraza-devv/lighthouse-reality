import React from 'react';
import { Helmet } from 'react-helmet';

import DiscoverSection from '../../components/DiscoverSection/DiscoverSection';
import FindHomeSection from '../../components/FindHomeSection/FindHomeSection';
import GridContainer from '../../components/GridContainer/GridContainer';

const HomePage: React.FC = () => {
    return (
        <>
            <DiscoverSection />
            <FindHomeSection />
            <GridContainer />
            <Helmet title="Lighthouse Reality | Welcome" />
        </>
    );
};

export default HomePage;

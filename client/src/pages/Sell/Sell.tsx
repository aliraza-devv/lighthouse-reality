import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import Showcase from '../../components/Showcase/Showcase';
import SellContent from './SellContent/SellContent';
import SellDetails from '../../components/SellDetails/SellDetails';
import { SellBg } from '../../assets/image/index';
import { RootState } from '../../store';

const Sell: React.FC = () => {
    const authSlice = useSelector((state: RootState) => state.user.isAuth);

    let pageContent = (
        <>
            <Showcase
                bgImg={SellBg}
                heading="Sell or Rent your Property"
                paragraph="We've partnered with companies to help you sell, buy and move. Find out what options are available for your home."
                small={true}
            ></Showcase>
            <SellContent />
        </>
    );

    if (authSlice) {
        pageContent = <SellDetails />;
    }

    return (
        <>
            {pageContent}
            <Helmet title="Lighthouse Reality | Sell with us" />
        </>
    );
};

export default Sell;

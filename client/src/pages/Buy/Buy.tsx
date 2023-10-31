import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { animateScroll } from 'react-scroll';
import { Helmet } from 'react-helmet';

import { BuyFormValues } from '../../types';
import ShowProperties from '../../components/ShowProperties/ShowProperties';
import Showcase from '../../components/Showcase/Showcase';
import BuyInput from '../../components/BuyInput/BuyInput';
import BuyContent from './BuyContent/BuyContent';
import { BuyBg } from '../../assets/image/index';

const Buy: React.FC = () => {
    const [data, setData] = useState({ for: '', city: '' });
    const [isSubmit, setIsSubmit] = useState(false);

    const formSubmit: SubmitHandler<BuyFormValues> = (formData) => {
        setData({ ...data, for: formData.for, city: formData.city });
        setIsSubmit(true);
        animateScroll.scrollTo(600, {
            smooth: true,
            delay: 100,
            duration: 1000
        });
    };

    return (
        <>
            <Showcase bgImg={BuyBg} heading="Imagine House" paragraph="We will help you to find what you'll dream of.">
                <BuyInput formSubmit={formSubmit} />
            </Showcase>
            {isSubmit ? <ShowProperties city={data.city} for={data.for} /> : <BuyContent />}
            <Helmet title="Lighthouse Reality | Buy with us" />
        </>
    );
};

export default Buy;

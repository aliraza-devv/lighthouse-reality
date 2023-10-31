import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { animateScroll } from 'react-scroll';
import { Helmet } from 'react-helmet';

import Showcase from '../../components/Showcase/Showcase';
import RealtorInput from '../../components/RealtorInput/RealtorInput';
import RealtorBox from '../../components/RealtorBox/RealtorBox';
import RealtorSearched from '../../components/RealtorSearched/RealtorSearched';
import { RealtorBg } from '../../assets/image/index';
import { RealtorFormValues } from '../../types';

const Realtors: React.FC = () => {
    const [searchRealtor, setSearchRealtor] = useState<{ city: string; name: string }>({
        city: '',
        name: ''
    });
    const [isSubmit, setIsSubmit] = useState<Boolean>(false);

    const formSubmit: SubmitHandler<RealtorFormValues> = ({ city, name }) => {
        setSearchRealtor({ ...searchRealtor, city, name });
        setIsSubmit(true);
        animateScroll.scrollTo(600, {
            smooth: true,
            delay: 100,
            duration: 1000
        });
    };
    return (
        <React.Fragment>
            <Showcase bgImg={RealtorBg} heading="Find Realtors" paragraph="Make sure your dreams are in trusted hands.">
                <RealtorInput smallPH="Agent Name (optional)" largePH="Enter City Name" formSubmit={formSubmit} />
            </Showcase>
            {isSubmit ? <RealtorSearched searched={searchRealtor} /> : <RealtorBox />}
            <Helmet title="Lighthouse Reality | Search Realtors" />
        </React.Fragment>
    );
};

export default Realtors;

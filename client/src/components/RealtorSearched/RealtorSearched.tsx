import React from 'react';

import RealtorLink from './RealtorLink/RealtorLink';
import Loader from '../UI/Loader/Loader';
import { Realtor } from '../../types';
import { useRealtors } from '../../graphql/hooks';
import { TopRightSvg } from '../../assets/svg';

type RealtorSearchedProps = {
    searched: { city: string; name: string };
};

const RealtorSearched: React.FC<RealtorSearchedProps> = ({ searched: { city, name } }) => {
    const { realtors, loading, error } = useRealtors(city, name);

    let content;

    if (loading) {
        content = <Loader />;
    }

    if (error) {
        content = <h1>Something Went Wrong...</h1>;
    }

    if (realtors) {
        content = realtors.map((r: Realtor) => <RealtorLink realtor={r} key={r.id} />);
    }

    return (
        <>
            <div className="searched">
                <div className="realtor__search-top-left"></div>
                <img className="top__right searched-svg" src={TopRightSvg} alt="top right" />
                <p className="heading-big">Showing results of {`"${city}" ${name && ` & "${name}"`}`}</p>
                <p className="searched-results">{realtors ? realtors.length : '0'} Results found</p>
            </div>
            <div className="searched-content">{content}</div>
        </>
    );
};

export default RealtorSearched;

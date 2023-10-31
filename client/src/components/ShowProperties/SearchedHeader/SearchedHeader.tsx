import React from 'react';

import { TopRightSvg } from '../../../assets/svg';

type SearchedHeaderProps = {
    length: string;
    city: string;
};

const SearchedHeader: React.FC<SearchedHeaderProps> = ({ length, city }) => {
    return (
        <div className="searched">
            <img className="top__right searched-svg" src={TopRightSvg} alt="top right" />
            <p className="heading-medium center__center">Showing results of "{city.split(',')[0] || city}"</p>
            <p className="searched-results">{length} Result found</p>
        </div>
    );
};

export default SearchedHeader;

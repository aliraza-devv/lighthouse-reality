import React from 'react';
import { Link } from 'react-router-dom';

import { RightArrowSingle, LeftArrowSingle } from '../../UI/svgComponents/index';

type DiscoverBoxProps = {
    boxNo: string;
    heading: string;
};

const DiscoverBox: React.FC<DiscoverBoxProps> = ({ boxNo, heading }) => {
    return (
        <div className={`box box__${boxNo}`}>
            <div className="box__tri">
                <p className="box__heading">{heading}</p>
                <div className="box__explore">
                    <RightArrowSingle />
                    <Link to="/buy" className="box__explore__btn">
                        Explore
                    </Link>
                    <LeftArrowSingle />
                </div>
            </div>
            <div className="box__text">
                <p className="box__paragraph u-margin-bottom-small">Discover</p>
                <p className="box__heading">{heading}</p>
            </div>
        </div>
    );
};

export default DiscoverBox;

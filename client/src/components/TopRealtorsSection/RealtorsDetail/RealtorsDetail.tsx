import React from 'react';

type RealtorsDetailProps = {
    name: string;
    soldCount: string;
    realtorImg: string;
};

const RealtorsDetail: React.FC<RealtorsDetailProps> = ({ realtorImg, name, soldCount }) => {
    return (
        <React.Fragment>
            <img src={realtorImg} alt="Top Realtors" className="realtors__img" />
            <div className="realtors__details">
                <h4 className="realtors__details__heading">{name}</h4>
                <p className="realtors__sold">{`${soldCount} Houses Sold`}</p>
            </div>
        </React.Fragment>
    );
};

export default RealtorsDetail;

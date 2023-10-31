import React from 'react';

type RealtorProfileProps = {
    img: string;
    name: string;
    soldCount: string;
};

const RealtorProfile: React.FC<RealtorProfileProps> = ({ img, name, soldCount }) => {
    return (
        <div className="profile">
            <img className="profile__img" src={img} alt="realtor" />
            <div className="profile__details">
                <p className="profile__name">{name}</p>
                <span className="profile__span">{`${soldCount} Houses Sold`}</span>
            </div>
        </div>
    );
};

export default RealtorProfile;

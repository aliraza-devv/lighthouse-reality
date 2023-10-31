import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import { EmailSvg, AddressSvg } from '../../assets/svg';

const ProfileDetails: React.FC = () => {
    const realtorSlice = useSelector((state: RootState) => state.user.realtor);

    return (
        <div className="user">
            <div className="user__info">
                <img src={realtorSlice?.avatarImage} alt="User" className="user__image" />
                <div className="user__contact-details">
                    <p className="user__heading">{realtorSlice?.fullName}</p>
                    <div className="realtor__details--popup-text">
                        <img src={EmailSvg} alt="email" />
                        <p className="popup__text u-margin-bottom-small">{realtorSlice?.email}</p>
                    </div>
                    <div className="realtor__details--popup-text">
                        <img src={AddressSvg} alt="address" />
                        <p className="popup__text u-margin-bottom-small">{realtorSlice?.city}</p>
                    </div>
                </div>
            </div>

            <div className="user__sec-info u-margin-top-medium">
                <p className="user__heading">About Yourself: </p>
                <p className="user__textarea user__about">{realtorSlice?.bio}</p>
                <div className="user__exp-sp u-margin-top-small">
                    <div className="user__exp">
                        <p className="user__heading">Experience</p>
                        <div className="user__textarea">{realtorSlice?.experience} Years</div>
                    </div>
                    <div className="user__sp">
                        <p className="user__heading">Specialization</p>
                        <div className="user__textarea">{realtorSlice?.specialization}</div>
                    </div>
                </div>
            </div>

            {/* <button className="btn btn--primary user__update-btn u-margin-top-medium">Update</button> */}
        </div>
    );
};

export default ProfileDetails;

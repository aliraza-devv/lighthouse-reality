import React from 'react';

import SideBarLink from './SideBarLink/SideBarLink';
import { UserSvg, CustomerSvg, UploadSvg, HouseSvg } from '../../assets/svg';

const ProfileSideBar: React.FC = () => {
    return (
        <nav className="user-view__menu">
            <ul className="side-nav">
                <SideBarLink text="Profile" svg={UserSvg} to="/profile" />
                <SideBarLink text="Listings" svg={CustomerSvg} to="listings" />
                <SideBarLink text="Post Property" svg={UploadSvg} to="/sell" />
                <SideBarLink text="Property Requests" svg={HouseSvg} to="requests" />
            </ul>
        </nav>
    );
};

export default ProfileSideBar;

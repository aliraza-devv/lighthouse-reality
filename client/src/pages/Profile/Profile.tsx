import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

import ProfileSideBar from '../../components/ProfileSideBar/ProfileSideBar';

const Profile: React.FC = () => {
    return (
        <>
            <div className="body">
                <main className="main">
                    <div className="user-view">
                        <ProfileSideBar />
                        <div className="user-view__content">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
            <Helmet title="Lighthouse Reality | Profile" />
        </>
    );
};

export default Profile;

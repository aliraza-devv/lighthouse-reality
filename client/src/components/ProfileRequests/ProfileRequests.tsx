import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { LoaderSvg } from '../../assets/svg';
import RequestBox from '../RequestBox/RequestBox';
import { useGetRequests } from '../../graphql/hooks';
import { RootState } from '../../store';
import { Request } from '../../types';

const ProfileRequests: React.FC = () => {
    const realtorSlice = useSelector((state: RootState) => state.user.realtor);
    const { requests, loading, error } = useGetRequests(realtorSlice?.id || '');

    return (
        <>
            <div className="list__heading u-margin-bottom-medium">
                <div className="list__text">
                    <p className="user__heading">Recent Properties Requests</p>
                    <p className="para-secondary">{requests?.length || '0'} Result found</p>
                </div>
            </div>
            <div className="card-container">
                {error && (
                    <div className="card-container--no-result">
                        <p className="heading-big">Something went Wrong!!</p>
                    </div>
                )}
                {loading && (
                    <div className="card-container--no-result">
                        <img src={LoaderSvg} alt="loading..." />
                    </div>
                )}
                {requests && requests.length === 0 && (
                    <div className="card-container--no-result">
                        <p className="heading-big">No Requests Found</p>
                    </div>
                )}
                {requests && (
                    <div className="card-container--request">
                        {requests.map((r: Request) => {
                            return <RequestBox request={r} />;
                        })}
                    </div>
                )}
            </div>
            <Helmet title="Lighthouse Reality | Property Requests" />
        </>
    );
};

export default ProfileRequests;

import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { LoaderSvg } from '../../assets/svg';
import { useGetListings } from '../../graphql/hooks';
import { RootState } from '../../store';
import { Property } from '../../types';
import ListingCard from '../ListingCard/ListingCard';

const ProfileListing: React.FC = () => {
    const realtorSlice = useSelector((state: RootState) => state.user.realtor);
    const { properties, loading, error } = useGetListings(realtorSlice?.id || '');

    return (
        <>
            <div className="list__heading u-margin-bottom-medium">
                <div className="list__text">
                    <p className="user__heading">Properties List</p>
                    <p className="para-secondary">{properties?.length || '0'} Result found</p>
                </div>
            </div>
            <div className="card-container card-container-with-m">
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
                {properties && properties.length === 0 && (
                    <div className="card-container--no-result">
                        <p className="heading-big">No Properties Found</p>
                    </div>
                )}
                {properties &&
                    properties.map((p: Property) => {
                        return <ListingCard property={p} key={p.id} />;
                    })}
            </div>
            <Helmet title="Lighthouse Reality | Profile Listings" />
        </>
    );
};

export default ProfileListing;

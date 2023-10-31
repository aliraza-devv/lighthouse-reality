import React from 'react';

import { useGetProperties } from '../../graphql/hooks';
import { Map } from '../../assets/image';
import PropertyCard from '../PropertyCard/PropertyCard';
import SearchedHeader from './SearchedHeader/SearchedHeader';
import { Property } from '../../types';
import { LoaderSvg } from '../../assets/svg';

type ShowPropertiesProps = {
    city: string;
    for: string;
};

const ShowProperties: React.FC<ShowPropertiesProps> = (props) => {
    const { properties, loading, error } = useGetProperties({ city: props.city, for: props.for });
    return (
        <>
            <SearchedHeader length={!error && !loading ? properties.length : '0'} city={props.city} />
            <div className="searched__houses">
                <div className="searched__houses__left">
                    <img className="searched__houses__map--img" src={Map} alt="map" />
                </div>
                <div className="searched__houses__right">
                    <div className="card-container card-container-buy-search">
                        {loading && (
                            <div className="card-container-buy-search--box">
                                <img src={LoaderSvg} className="card-container-buy-search--box-loader" alt="loader" />
                            </div>
                        )}
                        {error && (
                            <div className="card-container-buy-search--box">
                                <p className="heading-big">Something Went Wrong.Try Again!</p>
                            </div>
                        )}
                        {!loading && !error && properties.length === 0 && (
                            <div className="card-container-buy-search--box">
                                <p className="heading-big">Sorry, No Results Found</p>
                            </div>
                        )}
                        {!loading && !error && properties.map((p: Property) => <PropertyCard key={p.id} property={p} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowProperties;

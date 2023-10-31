import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import BeginCard from '../BeginCard/BeginCard';
import FinalCard from '../FinalCard/FinalCard';
import { PropertyDetails, PropertyOwnership } from '../../assets/svg/index';
import { BeginCardFormValues, FinalCardFormValues } from '../../types';
import { uploadPropertyImages } from '../../utils/helper-functions';
import { useCreateProperty } from '../../graphql/hooks';

const DEFAULT_IMAGE = ['https://images.adsttc.com/media/images/5f51/a5d9/b357/65fa/5600/025b/large_jpg/Ozkiniai_eksterjeras_132.jpg?1599186382'];

const initialState = {
    for: '',
    type: '',
    kind: ''
};

const SellDetails: React.FC = () => {
    const [beginValues, setBeginValues] = useState(initialState);
    const [finalCard, setFinalCard] = useState<boolean>(false);
    const [isImgLoading, setIsImgLoading] = useState<boolean>(false);

    const { makeReq, loading, error } = useCreateProperty();
    const navigate = useNavigate();

    const beginFormSubmit: SubmitHandler<BeginCardFormValues> = (data) => {
        setBeginValues({ ...beginValues, for: data.for, kind: data.kind, type: data.type });
        setFinalCard(true);
    };

    const finalFormSubmit: SubmitHandler<FinalCardFormValues> = async (data) => {
        setIsImgLoading(true);
        const links = await uploadPropertyImages(Array.from(data.images));

        const newProperty = {
            ...beginValues,
            rooms: data.rooms.toString(),
            bathrooms: data.bathrooms.toString(),
            price: data.price.toString(),
            description: data.description,
            city: data.city,
            area: data.area.toString(),
            images: links || DEFAULT_IMAGE
        };
        setIsImgLoading(false);

        await makeReq(newProperty);
        if (!error && !loading) {
            navigate('/profile/listings');
        }
    };

    let pageSvg = PropertyDetails;
    let pageHeading = 'Add your Property Details';
    let pagePara = 'Begin by telling us the few details about your property';
    let card = <BeginCard formSubmit={beginFormSubmit} />;

    if (finalCard) {
        pageSvg = PropertyOwnership;
        pageHeading = 'Add Other Details';
        pagePara = 'Reach upto 2.5M Buyers';
        card = <FinalCard formSubmit={finalFormSubmit} imgLoading={isImgLoading} loading={loading} error={error} />;
    }

    return (
        <section className="sell__details">
            <div className="sell__details--left">
                <p className="heading-big">{pageHeading}</p>
                <p className="paragraph paragraph-primary u-margin-bottom-medium">{pagePara}</p>
                <img src={pageSvg} alt="sell_begin" />
            </div>
            <div className="sell__details--right">{card}</div>
        </section>
    );
};

export default SellDetails;

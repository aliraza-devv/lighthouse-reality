import React from 'react';

type StoryProps = {
    clientImg: string;
    clientName: string;
    clientReview: string;
    clientReviewHeading: string;
};

const Story: React.FC<StoryProps> = ({ clientImg, clientName, clientReview, clientReviewHeading }) => {
    return (
        <div className="story">
            <figure className="story__shape">
                <img src={clientImg} alt="Clients" className="story__img" />
                <figcaption className="story__caption">{clientName}</figcaption>
            </figure>
            <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">{clientReviewHeading}</h3>
                <p>{clientReview}</p>
            </div>
        </div>
    );
};

export default Story;

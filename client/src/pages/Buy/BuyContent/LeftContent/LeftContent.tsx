import React from 'react';

import { Pin } from '../../../../components/UI/svgComponents/index';

type LeftContentProps = {
    text: string;
};

const LeftContent: React.FC<LeftContentProps> = ({ text }) => {
    return (
        <p className="paragraph u-margin-bottom-small">
            <Pin /> &nbsp; {text}
        </p>
    );
};

export default LeftContent;

import React from 'react';
import styled from 'styled-components';

interface StyledDivProps {
    background: string;
    small?: boolean;
}

type ShowcaseProps = {
    bgImg: string;
    heading: string;
    paragraph: string;
    children?: React.ReactNode;
    small?: boolean;
};

const StyledDiv = styled.div<StyledDivProps>`
    width: 100%;
    height: ${({ small }) => (small ? '35vh' : '80vh')};
    background: ${({ background }) => `url(${background}) no-repeat center`};
    background-size: cover;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
    }
`;

const Showcase: React.FC<ShowcaseProps> = ({ bgImg, heading, paragraph, children, small }) => {
    return (
        <section className="showcase">
            <StyledDiv background={bgImg} small={small} />
            <div className="showcase__text-box">
                <div className="showcase__text-box--heading">{heading}</div>
                <p className="showcase__text-box--text">{paragraph}</p>
            </div>
            {children}
        </section>
    );
};

export default Showcase;

import React from 'react';
import { NavLink } from 'react-router-dom';

type NavigationLinkProps = {
    link: string;
    children: React.ReactNode;
};

const NavigationLink: React.FC<NavigationLinkProps> = ({ link, children }) => {
    const activeClassName = 'navbar__links__text navbar__links--active under__line';

    return (
        <NavLink to={link} end className={({ isActive }) => (isActive ? activeClassName : 'navbar__links__text line__hover')}>
            {children}
        </NavLink>
    );
};

export default NavigationLink;

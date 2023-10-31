import React from 'react';

import Links from './Links/Links';
import Contact from './Contact/Contact';
import SeenOn from './SeenOn/SeenOn';
import Subscribe from './Subscribe/Subscribe';
import { Email, Phone, Facebook, Instagram, Pinterest, Twitter } from '../svgComponents/index';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__left">
                <p className="footer__heading">Useful links</p>
                <Links />
                <p className="footer__heading">Contact us</p>
                <Contact address="444-444-4444">
                    <Phone className="svg-footer-res" />
                </Contact>
                <Contact address="contact@lighthouse.io">
                    <Email className="svg-footer-res" />
                </Contact>
            </div>
            <SeenOn />
            <Subscribe />
            <div className="footer__last">
                <div className="icons">
                    <Twitter />
                    <Facebook />
                    <Instagram />
                    <Pinterest />
                </div>
                <p className="footer__links__text copyright__text">2022@lighthouserealty.io | All Right Reserve</p>
            </div>
        </footer>
    );
};

export default Footer;

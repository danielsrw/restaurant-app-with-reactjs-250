import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { Newsletter } from '../../components'
import { images } from '../../constants'
import './Footer.css';

const Footer = () => (
    <div className='app__footer section__padding'>
        <Newsletter />

        <div className='app__footer-links'>
            <div className='app__footer-links_contact'>
                <h1 className='app__footer-headtext'>Contact Us</h1>
                <p className='p__opensans'>
                    KN223 St Downtown, Kigali Rwanda
                </p>
                <p className='p__opensans'>
                    (+250) 781 862 349
                </p>
                <p className='p__opensans' style={{ textTransform: 'lowercase' }}>
                    danielsrwanda@gmail.com
                </p>
            </div>
            <div className='app__footer-links_logo'>
                <img src={ images.gericht } alt="footer logo" />
                <p className='p__opensans'>
                    The best way to find yourself is to lose yourself in the service of others
                </p>
                <img src={ images.spoon } alt='spoon' className='spoon__img' style={{ marginTop: '15px' }} />
                <div className='app__footer-links_icons'>
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>
            <div className='app__footer-links_work'>
                <h1 className='app__footer-headtext'>Working Hours</h1>
                <p className='p__opensans'>
                    Monday - Friday:
                </p>
                <p className='p__opensans'>
                    10:00 Am - 02:00 Am
                </p>
                <p className='p__opensans'>
                    Satday - Sunday:
                </p>
                <p className='p__opensans'>
                    10:00 Am - 03:00 Am
                </p>
            </div>
        </div>
        <div className='footer__copyright'>
            <p className='p__opensans'>
                2021 Gericht. All Right Reserved
            </p>
        </div>
    </div>
);

export default Footer;

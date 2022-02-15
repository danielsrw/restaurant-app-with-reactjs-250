import React from 'react';
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css';

const Header = () => (
    <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
            <SubHeading title='Chase to the new flavour' />
            <h1 className="app__header-h1">The key to fine dining</h1>
            <p className="p__opensans" style={{ margin: '2rem 0' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore ratione ea nisi atque nemo alias, dolore porro! Alias saepe voluptas ducimus quibusdam autem voluptatibus harum assumenda rem! Ullam, tenetur.
            </p>
            <button type='button' className="custom__button">Explore Menu</button>
        </div>

        <div className="app__wrapper_img">
            <img src={ images.welcome } alt="header img" />
        </div>
    </div>
);

export default Header;

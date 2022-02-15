import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
    <div className='app__bg app__wrapper'>
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={ images.chef } alt="chef" />
        </div>

        <div className='app__wrapper_info'>
            <SubHeading title="Chef's word" />
            <h1 className="headtext__cormorant">What we believe in</h1>

            <div className="app__chef-content">
                <div className="app__chef-content_quote">
                    <img src={ images.quote } alt="quote" />
                    <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, fugiat.</p>
                    <p className="p__opensans">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore laborum, quia nam repudiandae praesentium voluptatum illo neque aspernatur? Hic, vero aliquam! Maiores omnis harum dolorem eos beatae, dicta dolores?
                    </p>
                </div>

                <div className="app__chef-sign">
                    <p>Kevin Luo</p>
                    <p className="p__opensans">Chef & Founder</p>

                    <img src={ images.sign } alt="sign" />
                </div>
            </div>
        </div>
    </div>
);

export default Chef;

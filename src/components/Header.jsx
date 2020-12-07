import React from 'react';
import './Header.scss';

import Navbar from './Navbar';
import ReactSlider from './Slider/ReactSlider';
import ReactSliderItem from './Slider/ReactSliderItem';
import slider_img_1 from '../img/slider_icon.svg';
import slider_img_2 from '../img/slider_icon.svg';
import slider_img_3 from '../img/content_images/mountain_3.jpg';
import slider_img_4 from '../img/content_images/waterfall_4.jpg';

function Header() {
    return (
        <div className="Header">
            <Navbar/>
            <ReactSlider>
                <ReactSliderItem img={slider_img_1} title="Introducing" description="Something hot" btnTitle="Try demo"/>
                <ReactSliderItem img={slider_img_2} title="Some interesting title" description="Something new" btnTitle="Try this demo"/>
                <ReactSliderItem img={slider_img_3} title="And another one title" description="One more title, read it!" />
                <ReactSliderItem img={slider_img_4} title="One more title you need to read" desctiption="Read this too!"/>
            </ReactSlider>
        </div>

    )
}

export default Header;
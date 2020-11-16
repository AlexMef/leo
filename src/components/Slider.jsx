import React from 'react';
import './Slider.scss';
import slider_icon from "../img/slider_icon.svg";

function Slider() {
    return (
        <div className="Slider">
            <button className="Slider-button-previous"/>
            <div className="Slider-content">
                <div className="Slider-content-leftbar">
                    <img src={slider_icon} alt=""/>
                </div>
                <div className="Slider-content-rightbar">
                    <h1>Introducing</h1>
                    <h2>Something hot......</h2>
                    <button id="try_demo">Try demo</button>
                </div>
            </div>
            <button className="Slider-button-next"/>
        </div>
    )
}

export default Slider;
import React from 'react';
import dailyblogImg from '../../img/screenshot.svg';
import './TabContent.scss';
import search_based from "../../img/content_images/waterfall_4.jpg";


function SearchBasedTabContent(props) {
    return (
        <div className="Tab-content-item">
            <img className="Tab-content-item-logo" src={search_based} alt=""/>
            <div className="Tab-content-item-title">
                Some cool title for tab <b>4</b>
            </div>
            <div className="Tab-content-item-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam dolor doloremque error exercitationem magni quis tenetur.
                Ad, aliquam atque cupiditate nam nisi perferendis quod tempore
                velit voluptatum. Ipsum quisquam, velit?
            </div>
        </div>
    )
}

export default SearchBasedTabContent;



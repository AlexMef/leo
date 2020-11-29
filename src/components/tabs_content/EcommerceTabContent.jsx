import React from 'react';
import ecommerce_img from "../../img/content_images/mountains_2.jpg";
import './TabContent.scss';


function EcommerceTabContent(props) {
    return (
        <div className="Tab-content-item">
            <img className="Tab-content-item-logo" src={ecommerce_img} alt=""/>
            <div className="Tab-content-item-title">
                Some cool title for tab <b>2</b>
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

export default EcommerceTabContent;

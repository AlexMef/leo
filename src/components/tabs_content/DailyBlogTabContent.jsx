import React from 'react';
import './TabContent.scss';
import dailyblog_img from "../../img/content_images/mountain_3.jpg";


function DailyBlogTabContent(props) {
    return (
        <div className="Tab-content-item">
            <img className="Tab-content-item-logo" src={dailyblog_img} alt=""/>
            <div className="Tab-content-item-title">
                Some cool title for tab <b>3</b>
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

export default DailyBlogTabContent;



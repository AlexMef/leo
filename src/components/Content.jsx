import React from 'react';
import './Content.scss';
import content_logo from '../img/ipad.svg';
import tab_responsive from '../img/tabs/responsive.png';
import tab_ecommerce from '../img/tabs/ecommerce.png';
import tab_dailyblog from '../img/tabs/dailyblog.png';
import tab_searchbased from '../img/tabs/searchbased.png';
import screenshot from '../img/screenshot.svg';
import TabMenu from './TabMenu';

function Content(props) {
    return (
        <div className="Content">
            <div className="Content-wrapper">
                <TabMenu />
                <div className="Content-features">
                    <img className="Content-features-screenshot" src={screenshot} alt=""/>
                    <div className="Content-features-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquam dolor doloremque error exercitationem magni quis tenetur.
                        Ad, aliquam atque cupiditate nam nisi perferendis quod tempore
                        velit voluptatum. Ipsum quisquam, velit?
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
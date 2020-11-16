import React from 'react';
import './Content.scss';
import content_logo from '../img/ipad.svg';
import tab_responsive from '../img/tabs/responsive.png';
import tab_ecommerce from '../img/tabs/ecommerce.png';
import tab_dailyblog from '../img/tabs/dailyblog.png';
import tab_searchbased from '../img/tabs/searchbased.png';
import screenshot from '../img/screenshot.svg';

function Content(props) {
    return (
        <div className="Content">
            <div className="Content-wrapper">
                <div className="Content-tabs">
                    <nav className="Content-tabs-navigation">
                        <button id="responsive" className="tab-button">
                            <img src={tab_responsive} alt=""/>
                            <h2>Responsive</h2>
                            <h3>Websites</h3>
                        </button>
                        <button id="commerce" className="tab-button">
                            <img src={tab_ecommerce} alt=""/>
                            <h2>e Commerce</h2>
                            <h3>Websites</h3>
                        </button>
                        <button id="daily-blog" className="tab-button">
                            <img src={tab_dailyblog} alt=""/>
                            <h2>Daily blog</h2>
                            <h3>Websites</h3>
                        </button>
                        <button id="search_based" className="tab-button">
                            <img src={tab_searchbased} alt=""/>
                            <h2>Search based</h2>
                            <h3>Websites</h3>
                        </button>
                    </nav>
                    {/* replace tab content with appropriate component; export*/}
                    <div className="Content-tabs-tabcontent">
                        <img className="Content-tabs-tabcontent-logo" src={content_logo} alt=""/>
                        <div className="Content-tabs-tabcontent-title">
                            Some cool title
                        </div>
                        <div className="Content-tabs-tabcontent-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquam dolor doloremque error exercitationem magni quis tenetur.
                            Ad, aliquam atque cupiditate nam nisi perferendis quod tempore
                            velit voluptatum. Ipsum quisquam, velit?
                        </div>
                    </div>
                </div>
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
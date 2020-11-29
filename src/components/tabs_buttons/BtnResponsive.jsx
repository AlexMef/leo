import React from 'react';
import tab_responsive from "../../img/tabs/responsive.png";
import '../TabMenuItem.scss';

function BtnResponsive(props) {
    return (
        <button id="btn_responsive"
                className="tab-button">
            <img src={tab_responsive} alt=""/>
            <h2>Responsive</h2>
            <h3>Websites</h3>
        </button>
    )
}

export default BtnResponsive;
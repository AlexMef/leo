import React from 'react';
import img_searchbased from "../../img/tabs/searchbased.png";
import '../TabMenuItem.scss';

function BtnSearchBased(props) {
    return (
        <button id="btn_responsive"
                className="tab-button">
            <img src={img_searchbased} alt=""/>
            <h2>Search based</h2>
            <h3>Websites</h3>
        </button>
    )
}

export default BtnSearchBased;
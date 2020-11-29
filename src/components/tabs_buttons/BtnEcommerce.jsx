import React from 'react';
import img_ecommerce from '../../img/tabs/ecommerce.png';
import '../TabMenuItem.scss';

function BtnEcommerce(props) {
    return (
        <button id="btn_responsive" className="tab-button">
            <img src={img_ecommerce} alt=""/>
            <h2>e commerce</h2>
            <h3>Websites</h3>
        </button>
    )
}

export default BtnEcommerce;
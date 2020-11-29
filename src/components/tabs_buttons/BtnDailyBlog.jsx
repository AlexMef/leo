import React from 'react';
import img_dailyblog from '../../img/tabs/dailyblog.png';
import '../TabMenuItem.scss';

function BtnDailyBlog(props) {
    return (
        <button id="btn_responsive"
                className="tab-button">
            <img src={img_dailyblog} alt=""/>
            <h2>Daily Blog</h2>
            <h3>Websites</h3>
        </button>
    )
}

export default BtnDailyBlog;
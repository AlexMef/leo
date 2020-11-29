import React from "react";
import './TabMenuItem.scss';
import tab_responsive from "../img/tabs/responsive.png";

class TabMenuItem extends React.Component {
    render() {
        return (
            <button onClick={this.toggleActive} id="btn_responsive"
                    className="tab-button">
                <img src={tab_responsive} alt=""/>
                <h2>Title 1</h2>
                <h3>Websites</h3>
            </button>
        )
    }
}

export default TabMenuItem;
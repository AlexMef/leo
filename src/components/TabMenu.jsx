import React from "react";
import {NavLink, Route} from "react-router-dom";
import './TabMenu.scss';

import BtnResponsive from "./tabs_buttons/BtnResponsive";
import BtnEcommerce from "./tabs_buttons/BtnEcommerce";
import BtnDailyBlog from "./tabs_buttons/BtnDailyBlog";
import BtnSearchBased from "./tabs_buttons/BtnSearchBased";
import ResponsiveTabContent from "./tabs_content/ResponsiveTabContent";
import EcommerceTabContent from "./tabs_content/EcommerceTabContent";
import DailyBlogTabContent from "./tabs_content/DailyBlogTabContent";
import SearchBasedTabContent from "./tabs_content/SearchBasedTabContent";

// define as class to keep state of pressed tab
class TabMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive: <ResponsiveTabContent/>,
            ecommerce: <EcommerceTabContent/>,
            dailyblog: <DailyBlogTabContent/>,
            searchbased: <SearchBasedTabContent/>,
        }
    }


    render() {
        // let tab_content;
        // console.log(this.ref_responsive.current.className);
        // if (this.ref_responsive.current.className === "tab-button active") tab_content = <Responsive />;

        return (

            <div className="TabMenu">
                <nav className="TabMenu-navigation">
                    <NavLink to="/"><BtnResponsive/></NavLink>
                    <NavLink to="/ecommerce"><BtnEcommerce/></NavLink>
                    <NavLink to="/daily_blog"><BtnDailyBlog/> </NavLink>
                    <NavLink to="/search_based"><BtnSearchBased/></NavLink>
                </nav>

                {/* replace tab content with appropriate component; export*/}
                <div className="TabMenu-content">
                    <Route exact path="/">
                        {this.state.responsive}
                    </Route>
                    <Route path="/ecommerce">
                        {this.state.ecommerce}
                    </Route>
                    <Route path="/daily_blog">
                        {this.state.dailyblog}
                    </Route>
                    <Route path="/search_based">
                        {this.state.searchbased}
                    </Route>
                </div>
            </div>
        )
    }
}

export default TabMenu;
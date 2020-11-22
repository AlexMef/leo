import React from "react";
import tab_responsive from "../img/tabs/responsive.png";
import tab_ecommerce from "../img/tabs/ecommerce.png";
import tab_dailyblog from "../img/tabs/dailyblog.png";
import tab_searchbased from "../img/tabs/searchbased.png";
import content_logo from "../img/ipad.svg";
import TabMenuItem from './TabMenuItem';
import './TabMenu.scss';

// define as class to keep state of pressed tab
class TabMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                tab_responsive: {
                    id: 1,
                    image: tab_responsive,
                    title: "Responsive",
                    description: "Websites",
                    active: true,
                },
                tab_ecommerce: {
                    id: 2,
                    image: tab_ecommerce,
                    title: "e Commerce",
                    description: "Websites",
                    active: false,
                },
                tab_dailyblog: {
                    id: 3,
                    image: tab_dailyblog,
                    title: "Daily blog",
                    description: "Websites",
                    active: false,
                },

                tab_searchbased: {
                    id: 4,
                    image: tab_searchbased,
                    title: "Search based",
                    description: "Websites",
                    active: false,

                },
        }

        // this.onClickMenuItem = this.onClickMenuItem.bind(this);
    }


    onClickMenuItem = (e) => {
        this.clearActive();
        // for (let [key, value] in Object.entries(this.state)) {
        //
        //     // if (value.id === e.currentTarget.id) {
        //     //     this.setState(prevState => ({
        //     //         '${value}': {
        //     //             // implement addition of active class to selected element
        //     //             ...prevState.value,
        //     //             active: true,
        //     //         }
        //     //     }))
        //     // }
        //     console.log(`${value}`);
        // }
        console.log(e.currentTarget);

    }

    clearActive = () => {
        this.setState(prevState => ({
            tab_responsive: {
                ...prevState.tab_responsive,
                title: "Stewe Blowjobs",
                active: false,
            },
            tab_ecommerce: {
                ...prevState.tab_ecommerce,
                active: false,
            },
            tab_dailyblog: {
                ...prevState.tab_dailyblog,
                active: false,
            },
            tab_searchbased: {
                ...prevState.tab_searchbased,
                active: false,
            }
        }))
    }


    // cannot map using components

    // renderNav = () => {
    //     this.state.tabs.map(tab => {
    //         return <TabMenuItem onClick={this.onClickMenuItem}
    //                             id={tab.id}
    //                             image={tab.image}
    //                             title={tab.title}
    //                             description={tab.description}
    //                             active={tab.active} />
    //     })
    // }

    render() {
        const tabs = this.state;
        return (
            <div className="TabMenu">
                <nav className="TabMenu-navigation">
                    <TabMenuItem onClick={this.onClickMenuItem}
                                 id={tabs.tab_responsive.id}
                                 image={tabs.tab_responsive.image}
                                 title={tabs.tab_responsive.title}
                                 description={tabs.tab_responsive.description}
                                 active={tabs.tab_responsive.active}/>
                    <TabMenuItem onClick={this.onClickMenuItem}
                                 id={tabs.tab_ecommerce.id}
                                 image={tabs.tab_ecommerce.image}
                                 title={tabs.tab_ecommerce.title}
                                 description={tabs.tab_ecommerce.description}
                                 active={tabs.tab_ecommerce.active}/>
                    <TabMenuItem onClick={this.onClickMenuItem}
                                 id={tabs.tab_dailyblog.id}
                                 image={tabs.tab_dailyblog.image}
                                 title={tabs.tab_dailyblog.title}
                                 description={tabs.tab_dailyblog.description}
                                 active={tabs.tab_dailyblog.active}/>
                    <TabMenuItem onClick={this.onClickMenuItem}
                                 id={tabs.tab_searchbased.id}
                                 image={tabs.tab_searchbased.image}
                                 title={tabs.tab_searchbased.title}
                                 description={tabs.tab_searchbased.description}
                                 active={tabs.tab_searchbased.active}/>
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
        )
    }
}

export default TabMenu;
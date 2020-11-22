import React from "react";
import './TabMenuItem.scss';

class TabMenuItem extends React.Component {
    constructor(props) {
        super(props);
        let active = "";

    }

    onPropsChange = () => {
        console.log("props changed to " + this.props.active);
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.active !== prevProps.active) {
    //         this.render();
    //     }
    // }

    render() {
        this.props.active === true ? this.active = " active" : this.active = "";
        return (
            // add "active" props to define tab condition
            <button onClick={this.props.onClick} onChange={this.onPropsChange} id={this.props.id} className={"tab-button" + this.active}>
                <img src={this.props.image} alt=""/>
                <h2>{this.props.title}</h2>
                <h3>{this.props.description}</h3>
            </button>
        )
    }
}

export default TabMenuItem;
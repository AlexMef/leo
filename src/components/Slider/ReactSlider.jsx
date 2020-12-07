import React from 'react';
import './ReactSlider.scss';

import ReactSliderIcon from "../../img/arrow-previous.svg";

class ReactSlider extends React.Component {
    constructor(props) {
        super(props);
        // initialize array to keep active states
        this.state = {
            activeStates: new Array(props.children.length).fill(false, 0),
            // animate: false,
        }
        this.state.activeStates[0] = true; // set first element active
        this.indexOfActive = 0; // set first element index as active
        this.minActiveState = 0;
        this.maxActiveState = this.state.activeStates.length - 1;

        this.sliderContentRef = React.createRef();
        // this.btnPrev = this.props.btnPrev;
        // this.btnNext = this.props.btnNext;
    }

    onSelectNext = () => {
        // be careful
        if (this.state.activeStates.indexOf(true) < this.maxActiveState) {
            let arrayCopy = new Array(this.state.activeStates.length);
            arrayCopy.fill(false, 0);
            arrayCopy[this.indexOfActive += 1] = true;
            this.setState({activeStates: arrayCopy})
        }
    }

    onSelectPrevious = () => {
        if (this.state.activeStates.indexOf(true) !== this.minActiveState) {
            let arrayCopy = new Array(this.state.activeStates.length);
            arrayCopy.fill(false, 0);
            arrayCopy[this.indexOfActive -= 1] = true;
            this.setState({activeStates: arrayCopy})
        }
    }

    // animate = (event) => {
    //     console.log(event.target);
    //     let cleft = 100;
    //     let ctop = 100;
    //     let ctrans = 'translate(' + cleft + 'px, ' + ctop + 'px)';
    //     event.target.style.transition = "5s ease-in-out";
    //     event.target.style.transform = "rotateY(180deg)";
    //     // event.target.style.transform = "rotateY(-180deg)";
    // }

    render() {
        console.log(this.state.activeStates);
        return (
            <div className="React-slider-wrapper">
                <button className="React-slider-button React-slider-button-previous"
                        onClick={this.onSelectPrevious}>
                    <img className=" React-slider-button-previous-logo" src={ReactSliderIcon} alt="prev"/>
                </button>
                <div className="React-slider-content"> {this.props.children[this.indexOfActive]} </div>
                <button className="React-slider-button React-slider-button-next"
                        onClick={this.onSelectNext}>
                    <img className="React-slider-button-next-logo" src={ReactSliderIcon} alt="prev"/>
                </button>
            </div>
        )
    }
}

export default ReactSlider;
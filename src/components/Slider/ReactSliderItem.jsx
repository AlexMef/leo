import React from 'react';
import './ReactSliderItem.scss';


function ReactSliderItem(props) {
    return (
        <div className="React-slider-item-wrapper">
            {/*<img className="React-slider-item-content" src={props.children}/>*/}
            <div className="React-slider-item-leftbar">
                { props.img ? (<img className="React-slider-item-leftbar-img" src={props.img} alt=""/>) : null }
            </div>
            <div className="React-slider-item-rightbar">
                <div className="React-slider-item-rightbar-title">
                    {props.title ? props.title : null}
                </div>
                <div className="React-slider-item-rightbar-description">{props.description}</div>
                <div>
                    {
                        props.btnTitle
                            ? (<button className="React-slider-item-rightbar-button">{props.btnTitle}</button>)
                            : null
                    }
                </div>
                {/*<button className="React-slider-item-rightbar-button">{props.btnTitle}</button>*/}
            </div>
        </div>
    )
}

export default ReactSliderItem;
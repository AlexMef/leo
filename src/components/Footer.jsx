import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-login input-box">
                <div className="Footer-login-description">Member login</div>
                <div className="Footer-login-input">
                    <input type="text" id="Footer-login-input-username" placeholder="Enter username">

                    </input>
                    <input type="password" id="Footer-login-input-password" placeholder="Enter password">

                    </input>
                    <button id="Footer-login-input-submit">
                        Submit
                    </button>
                </div>
            </div>
            <div className="Footer-subscribe input-box">
                <div className="Footer-subscribe-description">Description</div>
                <div className="Footer-subscribe-input">
                    <input type="text" id="Footer-subscribe-email" placeholder="Email address"/>
                    <button id="Footer-subscribe-submit">Submit</button>
                </div>
            </div>
        </div>


    )
}


export default Footer;
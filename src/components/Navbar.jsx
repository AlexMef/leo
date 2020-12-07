import React from 'react';
import {NavLink} from 'react-router-dom'
import {GoogleLogin, useGoogleLogin} from "react-google-login";
import './Navbar.scss';

function Navbar(props) {
    // function loginSuccessful(){
    //     alert("Login successufl");
    // }
    //
    // function loginFailed() {
    //     alert("Login failed!");
    // }
    //
    // const {signIn, loaded} = useGoogleLogin({
    //     onSuccess,
    //     onAutoLoadFinished,
    //
    // })

    return (
            <nav className="Navbar">
                <div className="Navbar-sitetitle">Leo -/</div>
                <div className="Navbar-menu">
                    <NavLink to="/solutions" className="Navbar-menu-item">Solutions</NavLink>
                    <NavLink to="/products" className="Navbar-menu-item">Products</NavLink>
                    <NavLink to="/portfolio" className="Navbar-menu-item">Portfolio</NavLink>
                    <NavLink to="/contacts" className="Navbar-menu-item">Contacts</NavLink>
                    {/*<GoogleLogin clientId="720923903437-9ru78n4qujnlur41ll9h6bos7f28o4lb.apps.googleusercontent.com"*/}
                    {/*             buttonText="Login"*/}
                    {/*             onSuccess={loginSuccessful}*/}
                    {/*             onFailure={loginFailed}*/}
                    {/*             isSignedIn={true}*/}
                    {/*             cookiePolicy={"single_host_origin"}*/}
                    {/*             />*/}
                </div>
            </nav>
    )
}

export default Navbar;
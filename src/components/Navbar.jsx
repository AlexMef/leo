import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.scss';

function Navbar(props) {
    return (
            <nav className="Navbar">
                <div className="Navbar-sitetitle">Leo -/</div>
                <div className="Navbar-menu">
                    <NavLink to="/solutions" className="Navbar-menu-item">Solutions</NavLink>
                    <NavLink to="/products" className="Navbar-menu-item">Products</NavLink>
                    <NavLink to="/portfolio" className="Navbar-menu-item">Portfolio</NavLink>
                    <NavLink to="/contacts" className="Navbar-menu-item">Contacts</NavLink>
                </div>
            </nav>
    )
}

export default Navbar;
import React from 'react';
import './Navbar.scss';

function Navbar(props) {
    return (
            <nav className="Navbar">
                <div className="Navbar-sitetitle">Leo -/</div>
                <div className="Navbar-menu">
                    <div className="Navbar-menu-item">Solutions</div>
                    <div className="Navbar-menu-item">Products</div>
                    <div className="Navbar-menu-item">Portfolio</div>
                    <div className="Navbar-menu-item">Contacts</div>
                </div>
            </nav>
    )
}

export default Navbar;
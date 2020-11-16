import React from 'react';
import './Header.scss';

import Navbar from './Navbar';
import Slider from './Slider';

function Header() {
    return (
        <div className="Header">
            <Navbar/>
            <Slider/>
        </div>

    )
}

export default Header;
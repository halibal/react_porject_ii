import React from 'react';
import airbnblogo from '../img/airbnb-logo.png';

function Navbar() {
    return (
        <header>
            <nav className='navbar'>
                <img className='airbnblogo' src={airbnblogo} alt="airbnb logo" />
                <h2 className='airbnbTxt'>airbnb</h2>
            </nav>
        </header>
    )
}

export default Navbar;
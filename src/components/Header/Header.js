import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Menu'>Menu</Link>
                <Link to='/Order'>Order</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/signin'>Log In</Link>
            </nav>
        </div>
    );
};

export default Header;
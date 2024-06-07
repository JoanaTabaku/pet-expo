import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/birds">Birds</Link></li>
                <li><Link to="/cats">Cats</Link></li>
                <li><Link to="/dogs">Dogs</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
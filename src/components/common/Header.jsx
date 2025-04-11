import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; // Assuming you have a separate SCSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Eraah</Link>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
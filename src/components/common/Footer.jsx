import React from 'react';
import './Footer.scss'; // Assuming you have a separate SCSS file for footer styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-socials">
                    <a href="https://twitter.com/eraah" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com/company/eraah" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/eraah" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Eraah. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
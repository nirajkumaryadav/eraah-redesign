import React from 'react';
import './Button.scss'; // Assuming you have a separate SCSS file for button styles

const Button = ({ label, onClick, type = 'button', disabled = false }) => {
    return (
        <button
            className="eraah-button"
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
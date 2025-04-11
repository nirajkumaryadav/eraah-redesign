import React from 'react';
import './ServiceCard.scss';

const getIconPath = (iconName) => {
    switch(iconName) {
        case 'report':
            return "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z";
        case 'data':
            return "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6";
        case 'ai':
            return "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z";
        case 'training':
            return "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253";
        default:
            return "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z";
    }
};

const ServiceCard = ({ title, description, icon = 'default' }) => {
    return (
        <div className="service-card" role="article" aria-labelledby={`service-title-${title.replace(/\s/g, '-').toLowerCase()}`}>
            <div className="service-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getIconPath(icon)} />
                </svg>
            </div>
            <h3 className="service-title" id={`service-title-${title.replace(/\s/g, '-').toLowerCase()}`}>{title}</h3>
            <p className="service-description">{description}</p>
            <a href="#" className="service-link" aria-label={`Learn more about ${title}`}>Learn more</a>
        </div>
    );
};

export default ServiceCard;
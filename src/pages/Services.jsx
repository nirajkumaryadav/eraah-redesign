import React from 'react';
import ServicesList from '../components/services/ServicesList';
import './Services.scss';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="services-page">
            <div className="services-hero">
                <div className="container">
                    <span className="services-badge">Our Offerings</span>
                    <h1 className="services-title">AI-Powered <span className="highlight">Solutions</span> for NGOs</h1>
                    <p className="services-description">
                        At Eraah, we provide specialized AI tools designed specifically for mission-driven organizations.
                        Our technology helps NGOs maximize their impact through intelligent automation, data insights, and custom solutions.
                    </p>
                    
                    <div className="services-cta">
                        <Link to="/contact" className="cta-button primary">Request Demo</Link>
                        <a href="#service-list" className="cta-button secondary">Explore Services</a>
                    </div>
                </div>
                
                <div className="services-grid-bg">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="grid-dot"></div>
                    ))}
                </div>
            </div>
            
            <div className="services-main" id="service-list">
                <div className="container">
                    <div className="services-categories">
                        <button className="category-button active">All Services</button>
                        <button className="category-button">Data Analysis</button>
                        <button className="category-button">AI Automation</button>
                        <button className="category-button">Reporting</button>
                        <button className="category-button">Custom Solutions</button>
                    </div>
                    
                    <ServicesList />
                    
                    <div className="services-integration">
                        <div className="integration-content">
                            <h2>Seamless <span className="highlight">Integration</span> With Your Workflow</h2>
                            <p>Our AI solutions are designed to work with your existing tools and processes, providing powerful capabilities without disrupting your operations.</p>
                            
                            <div className="integration-logos">
                                <div className="logo-item">
                                    <div className="logo-circle"></div>
                                    <span>Salesforce</span>
                                </div>
                                <div className="logo-item">
                                    <div className="logo-circle"></div>
                                    <span>Microsoft</span>
                                </div>
                                <div className="logo-item">
                                    <div className="logo-circle"></div>
                                    <span>Google</span>
                                </div>
                                <div className="logo-item">
                                    <div className="logo-circle"></div>
                                    <span>Slack</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="integration-visual">
                            <div className="node-system">
                                <div className="central-node"></div>
                                <div className="connecting-line line-1"></div>
                                <div className="connecting-line line-2"></div>
                                <div className="connecting-line line-3"></div>
                                <div className="connecting-line line-4"></div>
                                <div className="outer-node node-1"></div>
                                <div className="outer-node node-2"></div>
                                <div className="outer-node node-3"></div>
                                <div className="outer-node node-4"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-section">
                        <div className="contact-content">
                            <h2>Ready to Transform Your Organization?</h2>
                            <p>Get in touch with our experts to discuss how Eraah's AI solutions can address your specific needs.</p>
                            <Link to="/contact" className="contact-button">Schedule a Consultation</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
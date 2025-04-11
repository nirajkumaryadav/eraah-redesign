import React from 'react';
import './Features.scss';

const featuresData = [
  {
    title: 'AI-Powered Insights',
    description: 'Leverage advanced AI algorithms to gain actionable insights from your organization\'s data.',
    icon: 'graph-trend'
  },
  {
    title: 'Customizable Reports',
    description: 'Generate tailored reports that meet the specific needs of your NGO and stakeholders.',
    icon: 'document-text'
  },
  {
    title: 'Specialized AI Agents',
    description: 'Deploy dedicated AI agents trained specifically for non-profit and NGO operations.',
    icon: 'chip'
  },
  {
    title: 'Intuitive Interface',
    description: 'Access powerful tools through our user-friendly interface, designed for non-technical users.',
    icon: 'layout-grid'
  }
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <span className="section-tag">Our Capabilities</span>
          <h2 className="features-title">Powerful AI Tools for <span className="highlight">Mission-Driven</span> Organizations</h2>
          <p className="features-subtitle">Discover how our AI-powered platform can help your NGO achieve more with less resources</p>
        </div>
        
        <div className="features-list">
          {featuresData.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <div className={`icon-${feature.icon}`}>
                  <div className="icon-inner"></div>
                </div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="features-background">
        <div className="grid-line vertical"></div>
        <div className="grid-line vertical"></div>
        <div className="grid-line vertical"></div>
        <div className="grid-line horizontal"></div>
        <div className="grid-line horizontal"></div>
        <div className="grid-line horizontal"></div>
      </div>
    </section>
  );
};

export default Features;
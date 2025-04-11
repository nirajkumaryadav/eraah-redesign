import React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Empowering NGOs with <span className="highlight">AI Solutions</span></h1>
        <p className="hero-description">
          Discover how Eraah's specialized AI agents and tools can transform your organization's 
          impact through intelligent automation, data insights, and custom solutions.
        </p>
        <div className="hero-cta-container">
          <button className="hero-cta primary">Get Started</button>
          <Link to="/services" className="hero-cta secondary">Explore Services</Link>
        </div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <div className="ai-orbit">
          <div className="ai-core"></div>
          <div className="ai-ring ring-1"></div>
          <div className="ai-ring ring-2"></div>
          <div className="ai-ring ring-3"></div>
          <div className="ai-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
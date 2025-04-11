import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import SEO from '../components/common/SEO';

const Home = () => {
    return (
        <>
            <SEO 
                title="AI Solutions for NGOs" 
                description="Discover how Eraah's specialized AI tools can transform your nonprofit organization through intelligent automation and data insights."
                keywords="AI for NGOs, nonprofit technology, data analysis for nonprofits, AI automation"
            />
            <Hero />
            <Features />
            <Testimonials />
        </>
    );
};

export default Home;
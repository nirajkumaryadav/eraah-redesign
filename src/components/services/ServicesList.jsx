import React from 'react';
import ServiceCard from './ServiceCard';

/**
 * Services data array containing information about each service offered by Eraah.
 * @type {Array<{id: number, title: string, description: string, icon: string}>}
 */
const servicesData = [
  {
    id: 1,
    title: 'AI-Powered Report Generation',
    description: 'Automatically generate comprehensive, data-driven reports for donor presentations, impact assessments, and strategic planning.',
    icon: 'report'
  },
  {
    id: 2,
    title: 'Data Analysis & Insights',
    description: 'Extract meaningful patterns and actionable insights from your organization\'s data with our advanced analytics tools.',
    icon: 'data'
  },
  {
    id: 3,
    title: 'Specialized AI Agents',
    description: 'Deploy custom AI assistants that automate routine tasks and help your team focus on high-impact activities.',
    icon: 'ai'
  },
  {
    id: 4,
    title: 'Training & Support',
    description: 'Comprehensive onboarding, training, and ongoing support to ensure your team can effectively utilize our AI tools.',
    icon: 'training'
  },
  {
    id: 5,
    title: 'Custom AI Development',
    description: 'Tailor-made AI solutions designed to address your organization\'s specific challenges and objectives.',
    icon: 'default'
  },
  {
    id: 6,
    title: 'Impact Measurement',
    description: 'Advanced tools to track, measure, and visualize the impact of your programs and interventions.',
    icon: 'data'
  },
];

/**
 * ServicesList component that renders a grid of service cards.
 * Each card displays information about an individual service.
 * @returns {React.ReactElement} The rendered component
 */
const ServicesList = () => {
  return (
    <div className="services-list">
      {servicesData.map(service => (
        <ServiceCard 
          key={service.id} 
          title={service.title} 
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
};

export default ServicesList;
import React from 'react';
import './Testimonials.scss';

const testimonialsData = [
  {
    name: "Sarah Johnson",
    position: "Executive Director, Global Relief Initiative",
    feedback: "Eraah's AI tools have revolutionized how we analyze field data. We're now able to identify patterns and needs much faster than ever before.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    position: "Operations Manager, EduForward",
    feedback: "The custom AI solution Eraah built for us has automated our resource allocation process, saving us hundreds of hours annually.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Amara Okafor",
    position: "Digital Transformation Lead, CleanWater Alliance",
    feedback: "Their specialized AI agents have transformed our donor engagement strategy. We've seen a 45% increase in recurring donations since implementation.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-tag">What Our Users Say</span>
          <h2>NGOs Transforming with <span className="highlight">AI-Powered Tools</span></h2>
        </div>
        
        <div className="testimonials-list">
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-mark">"</div>
              <p className="feedback">{testimonial.feedback}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4 className="name">{testimonial.name}</h4>
                  <p className="position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat">
            <span className="stat-number">100+</span>
            <span className="stat-label">NGOs Served</span>
          </div>
          <div className="stat">
            <span className="stat-number">35k+</span>
            <span className="stat-label">Reports Generated</span>
          </div>
          <div className="stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Satisfaction Rate</span>
          </div>
        </div>
      </div>
      
      <div className="glow-effect"></div>
    </section>
  );
};

export default Testimonials;
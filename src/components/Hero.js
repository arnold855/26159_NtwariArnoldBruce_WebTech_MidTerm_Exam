import React from 'react';
import './Hero.css';

function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-tagline">Welcome to</p>
        <h1 className="hero-title">Bright Future Library</h1>
        <p className="hero-subtitle">
          Empowering minds, inspiring dreams, and connecting our community through the love of reading.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo('books')}>Explore Books</button>
          <button className="btn-secondary" onClick={() => scrollTo('events')}>Upcoming Events</button>
        </div>
        <div className="hero-stats">
          <div className="stat"><span className="stat-num">10,000+</span><span>Books</span></div>
          <div className="stat"><span className="stat-num">500+</span><span>Members</span></div>
          <div className="stat"><span className="stat-num">20+</span><span>Events/Year</span></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

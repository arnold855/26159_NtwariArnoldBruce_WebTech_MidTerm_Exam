import React from 'react';
import './Header.css';

function Header() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header id="home" className="site-header" role="banner">
      <div className="site-header__overlay" aria-hidden="true"></div>

      <div className="site-header__content">
        <p className="site-header__eyebrow">Welcome to</p>
        <h1 className="site-header__title">Bright Future Library</h1>
        <p className="site-header__mission">
          Empowering our community through knowledge — promoting reading, supporting students,
          and providing free access to educational resources for every resident.
        </p>
        <div className="site-header__actions">
          <button className="btn btn--primary" onClick={() => scrollTo('services')}>
            Explore Services
          </button>
          <button className="btn btn--outline" onClick={() => scrollTo('books')}>
            Browse Books
          </button>
        </div>

        <div className="site-header__stats" aria-label="Library highlights">
          <div className="stat-item">
            <span className="stat-item__number">10,000+</span>
            <span className="stat-item__label">Books Available</span>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="stat-item">
            <span className="stat-item__number">500+</span>
            <span className="stat-item__label">Active Members</span>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="stat-item">
            <span className="stat-item__number">20+</span>
            <span className="stat-item__label">Events Per Year</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

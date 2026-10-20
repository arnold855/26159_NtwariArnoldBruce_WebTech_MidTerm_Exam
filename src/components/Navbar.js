import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home',          id: 'home' },
  { label: 'About Us',      id: 'about' },
  { label: 'Services',      id: 'services' },
  { label: 'Events',        id: 'events' },
  { label: 'Featured Books',id: 'books' },
  { label: 'Contact Us',    id: 'contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__brand" onClick={() => scrollTo('home')}>
        <span className="navbar__name">Bright Future Library</span>
      </div>

      <button
        className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {navLinks.map(({ label, id }) => (
          <li key={id}>
            <button onClick={() => scrollTo(id)}>{label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

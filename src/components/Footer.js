import React from 'react';
import './Footer.css';

const quickLinks = [
  { label: 'Home',           id: 'home' },
  { label: 'About Us',       id: 'about' },
  { label: 'Services',       id: 'services' },
  { label: 'Events',         id: 'events' },
  { label: 'Featured Books', id: 'books' },
  { label: 'Contact Us',     id: 'contact' },
];

function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="site-footer__grid">

          <div className="site-footer__brand">
            <div className="footer-logo">
              <span>Bright Future Library</span>
            </div>
            <p>
              Empowering our community through knowledge, literacy, and free access to
              educational resources since 2024.
            </p>
          </div>

          <nav className="site-footer__links" aria-label="Footer navigation">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map(({ label, id }) => (
                <li key={id}>
                  <button onClick={() => scrollTo(id)}>{label}</button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__contact">
            <h4>Contact</h4>
            <p>Address: 14 Knowledge Avenue, Bright Town</p>
            <p>Tel: +250 788 123 456</p>
            <p>Email: info@brightfuturelibrary.rw</p>
            <p>Hours: Mon–Fri: 8 AM – 7 PM</p>
          </div>

        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Bright Future Library. All rights reserved.</p>
          <p>Designed with care for our community.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

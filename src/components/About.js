import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__grid">

          {/* Visual panel */}
          <div className="about__visual" aria-hidden="true">
            <div className="about__image-box">
              <p className="about__est">Est. 2024</p>
            </div>
            <div className="about__badge">
              <p>Community Choice<br />Award 2024</p>
            </div>
          </div>

          {/* Text content */}
          <div className="about__text">
            <span className="section-label">Who We Are</span>
            <h2 id="about-heading" className="section-title">About Bright Future Library</h2>

            <p>
              Welcome to <strong>Bright Future Library</strong> — your community's gateway to knowledge,
              creativity, and lifelong learning. Established in 2024, our library was founded with a
              clear purpose: to promote reading, support students at every level, and ensure that every
              resident has free access to quality educational resources.
            </p>
            <p>
              We are more than a place to borrow books. We are a vibrant community hub where learners
              of all ages gather to explore ideas, develop skills, and connect with one another. Whether
              you are a student preparing for exams, a parent looking for children's stories, or a
              professional seeking to expand your knowledge, Bright Future Library is here for you.
            </p>

            <div className="about__pillars">
              <div className="pillar">
                <div>
                  <h4>Our Mission</h4>
                  <p>Promote literacy and lifelong learning for every member of our community.</p>
                </div>
              </div>
              <div className="pillar">
                <div>
                  <h4>Our Vision</h4>
                  <p>A community where access to knowledge empowers every individual to thrive.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

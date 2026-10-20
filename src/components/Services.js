import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Book Borrowing & Returning',
    desc: 'Borrow from over 10,000 titles across all genres. Members may borrow up to 5 books for a 2-week period with easy renewal options.',
  },
  {
    title: 'Internet & Computer Access',
    desc: 'Free high-speed Wi-Fi and dedicated computer workstations are available for research, online learning, and job applications.',
  },
  {
    title: 'Reading & Study Spaces',
    desc: 'Quiet reading rooms, group study areas, and comfortable lounge spaces designed to support focused learning for all ages.',
  },
  {
    title: 'Educational Workshops & Literacy Programmes',
    desc: 'Regular workshops on literacy, numeracy, digital skills, and career development — open and free to all community members.',
  },
  {
    title: "Children's Corner",
    desc: "A dedicated, safe space for young readers featuring picture books, interactive storytelling sessions, and creative activities.",
  },
  {
    title: 'Print, Scan & Copy Services',
    desc: 'Affordable printing, scanning, and photocopying services available on-site for students, job seekers, and the general public.',
  },
];

function Services() {
  return (
    <section id="services" className="services section" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2 id="services-heading" className="section-title" style={{ color: '#ffffff' }}>
            Our Services
          </h2>
          <p className="section-desc" style={{ color: '#a8c8e0' }}>
            Everything you need to learn, grow, and thrive — all under one roof and free to the community.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

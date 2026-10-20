import React, { useState } from 'react';
import './Events.css';

const events = [
  {
    id: 1,
    day: '24',
    month: 'Oct',
    year: '2026',
    title: 'Annual Reading Competition',
    category: 'Youth',
    time: '9:00 AM – 12:00 PM',
    location: 'Main Hall',
    desc: 'Students from ages 8 to 16 compete in our annual reading challenge. Participants are tested on comprehension, vocabulary, and fluency. Prizes and certificates awarded to all finalists.',
  },
  {
    id: 2,
    day: '28',
    month: 'Oct',
    year: '2026',
    title: "Children's Storytelling Session",
    category: 'Children',
    time: '10:00 AM – 11:30 AM',
    location: "Children's Corner",
    desc: "An enchanting storytelling morning for children aged 3–10. Our librarians bring beloved picture books to life with dramatic readings, puppets, and interactive activities.",
  },
  {
    id: 3,
    day: '05',
    month: 'Nov',
    year: '2026',
    title: 'Community Literacy Workshop',
    category: 'All Ages',
    time: '2:00 PM – 5:00 PM',
    location: 'Conference Room',
    desc: 'A free workshop focused on improving reading and writing skills for adults and teenagers. Volunteer tutors guide participants through practical literacy exercises and provide take-home resources.',
  },
  {
    id: 4,
    day: '20',
    month: 'Nov',
    year: '2026',
    title: 'Digital Skills for Beginners',
    category: 'Adults',
    time: '10:00 AM – 1:00 PM',
    location: 'Computer Lab',
    desc: 'Learn essential computer and internet skills including email, online research, and safe browsing. Ideal for seniors and first-time computer users. Registration required — seats are limited.',
  },
];

const categoryColor = {
  Youth:    '#2196f3',
  Children: '#4caf50',
  'All Ages': '#9c27b0',
  Adults:   '#e67e22',
};

function Events() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <section id="events" className="events section" aria-labelledby="events-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Stay Connected</span>
          <h2 id="events-heading" className="section-title">Upcoming Events</h2>
          <p className="section-desc">
            Join us for exciting programmes designed for every member of the community.
          </p>
        </div>

        <div className="events__list">
          {events.map((ev) => (
            <article
              key={ev.id}
              className={`event-card ${expanded === ev.id ? 'event-card--open' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => toggle(ev.id)}
              onKeyDown={(e) => e.key === 'Enter' && toggle(ev.id)}
              aria-expanded={expanded === ev.id}
            >
              {/* Date badge */}
              <div className="event-card__date" aria-label={`${ev.day} ${ev.month} ${ev.year}`}>
                <span className="event-card__day">{ev.day}</span>
                <span className="event-card__month">{ev.month}</span>
                <span className="event-card__year">{ev.year}</span>
              </div>

              {/* Info */}
              <div className="event-card__info">
                <span
                  className="event-card__category"
                  style={{ background: categoryColor[ev.category] }}
                >
                  {ev.category}
                </span>
                <h3 className="event-card__title">{ev.title}</h3>
                <p className="event-card__meta">
                  <span>{ev.time}</span>
                  <span className="meta-sep">|</span>
                  <span>{ev.location}</span>
                </p>
                {expanded === ev.id && (
                  <p className="event-card__desc">{ev.desc}</p>
                )}
              </div>

              <span className="event-card__toggle" aria-hidden="true">
                {expanded === ev.id ? '▲' : '▼'}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;

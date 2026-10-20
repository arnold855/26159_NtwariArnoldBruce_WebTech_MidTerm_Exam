import { useState } from 'react';
import './App.css';

const books = [
  {
    title: 'The Creative Act',
    author: 'Rick Rubin',
    category: 'Creativity',
    cover:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=85',
    color: 'sage',
  },
  {
    title: 'Braiding Sweetgrass',
    author: 'Robin Wall Kimmerer',
    category: 'Nature',
    cover:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=85',
    color: 'peach',
  },
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    category: 'Fiction',
    cover:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=85',
    color: 'blue',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Personal growth',
    cover:
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=85',
    color: 'yellow',
  },
];

const services = [
  {
    icon: '✳',
    title: 'A place to learn',
    text: 'Quiet reading corners, free Wi-Fi, and welcoming spaces for focused study.',
    label: 'Study & discover',
  },
  {
    icon: '⌘',
    title: 'Support for students',
    text: 'Friendly homework help and learning resources to help every student thrive.',
    label: 'Homework club',
  },
  {
    icon: '↗',
    title: 'Resources for all',
    text: 'Explore books, digital tools, and practical information for everyday life.',
    label: 'Browse resources',
  },
];

const events = [
  { date: '24', month: 'OCT', type: 'For young readers', title: 'Saturday story circle', time: '10:30 AM – 11:30 AM' },
  { date: '28', month: 'OCT', type: 'Study together', title: 'Homework help hour', time: '3:30 PM – 5:00 PM' },
  { date: '02', month: 'NOV', type: 'For everyone', title: 'Books & tea: community read', time: '2:00 PM – 3:30 PM' },
];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Bright Future Library home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" role="img">
          <path d="M5 10.5c5.6-2.7 10.7-1.8 15 1.2v20c-4.3-3-9.4-3.9-15-1.2V10.5Z" />
          <path d="M35 10.5c-5.6-2.7-10.7-1.8-15 1.2v20c4.3-3 9.4-3.9 15-1.2V10.5Z" />
          <path d="M20 12v19.7" />
        </svg>
      </span>
      <span className="brand-name">bright future<span>library</span></span>
    </a>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

function App() {
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.category}`
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );

  function handleSubscribe(event) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <div className="top-note">
        <span className="top-note-sparkle" aria-hidden="true">✳</span>
        A new chapter starts here. Everyone is welcome.
        <a href="#about">Get to know us <ArrowIcon /></a>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About us</a>
            <a href="#services" onClick={closeMenu}>What we offer</a>
            <a href="#books" onClick={closeMenu}>Books</a>
            <a href="#events" onClick={closeMenu}>Events</a>
            <a className="nav-visit" href="#visit" onClick={closeMenu}>Plan your visit <ArrowIcon /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span /> YOUR NEIGHBORHOOD, YOUR LIBRARY</div>
            <h1>Curiosity lives<br />around <em>the corner.</em></h1>
            <p className="hero-description">
              A little more room to dream, learn, and find your next favorite thing. Come in, get comfortable, and see where a good book takes you.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#services">Explore the library <ArrowIcon /></a>
              <a className="text-link" href="#events">See what’s on <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-footnote">
              <div className="avatar-stack" aria-hidden="true">
                <span>J</span><span>M</span><span>A</span>
              </div>
              <p><strong>A good place to belong.</strong><br />Built for curious minds of every age.</p>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=90"
              alt="Warm, welcoming library lined with bookshelves"
            />
            <div className="hero-image-label"><span className="label-icon">✳</span><span>Room to read.<br /><strong>Room to grow.</strong></span></div>
            <div className="hero-stamp" aria-label="Open to everyone">
              <span>OPEN TO</span><strong>EVERY<br />ONE</strong><span>✳ &nbsp; EVERY DAY</span>
            </div>
          </div>
          <div className="hero-bottom-note"><span>01 / 04</span><span className="note-line" /><span>FIND YOUR NEXT CHAPTER</span></div>
        </section>

        <section className="welcome-strip" id="about">
          <div className="section-wrap welcome-inner">
            <span className="welcome-mark" aria-hidden="true">✳</span>
            <p><span>More than books.</span> A bright space for the whole community to connect, discover, and grow.</p>
            <a href="#visit">A little about us <ArrowIcon /></a>
          </div>
        </section>

        <section className="services-section section-wrap section-space" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> A LITTLE SOMETHING FOR EVERYONE</div>
              <h2>Good things happen<br />when you <em>drop in.</em></h2>
            </div>
            <p>Whether you’re here to study, slow down, or find a new idea, there’s a spot for you.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className={`service-icon service-icon-${index}`}>{service.icon}</div>
                <span className="card-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#visit">{service.label} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="books-section" id="books">
          <div className="section-wrap books-inner">
            <div className="section-heading books-heading">
              <div>
                <div className="eyebrow"><span /> FROM OUR SHELVES</div>
                <h2>Meet your next<br /><em>can’t-put-it-down.</em></h2>
              </div>
              <div className="book-search-wrap">
                <label htmlFor="book-search">Looking for something?</label>
                <div className="book-search">
                  <span aria-hidden="true">⌕</span>
                  <input
                    id="book-search"
                    type="search"
                    placeholder="Search our picks"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="book-grid">
              {filteredBooks.map((book) => (
                <article className="book-card" key={book.title}>
                  <div className={`book-cover ${book.color}`}>
                    <img src={book.cover} alt="" loading="lazy" />
                    <span className="book-category">{book.category}</span>
                    <button
                      className="book-action"
                      type="button"
                      aria-label={`Ask about ${book.title}`}
                      onClick={() => {
                        const subject = encodeURIComponent(`Book enquiry: ${book.title}`);
                        window.location.href = `mailto:hello@brightfuturelibrary.org?subject=${subject}`;
                      }}
                    >↗</button>
                  </div>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </article>
              ))}
              {filteredBooks.length === 0 && (
                <p className="no-books">No featured books match “{query}”. Try another title or author.</p>
              )}
            </div>
            <div className="books-bottom">
              <p>Fresh picks from our shelves, chosen with love.</p>
              <a className="text-link" href="#visit">Come find your next read <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="events-section section-wrap section-space" id="events">
          <div className="section-heading events-heading">
            <div>
              <div className="eyebrow"><span /> MARK YOUR CALENDAR</div>
              <h2>There’s always room<br />for <em>one more.</em></h2>
            </div>
            <p>Little gatherings, big ideas, and good company. Save a spot at something coming up.</p>
          </div>
          <div className="events-list">
            {events.map((event) => (
              <article className="event-row" key={event.title}>
                <div className="event-date"><strong>{event.date}</strong><span>{event.month}</span></div>
                <div className="event-main"><span>{event.type}</span><h3>{event.title}</h3></div>
                <p className="event-time">{event.time}</p>
                <a className="event-link" href="mailto:hello@brightfuturelibrary.org?subject=Library%20event%20enquiry" aria-label={`Ask about ${event.title}`}><ArrowIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="visit-image">
            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=85" alt="Books waiting to be explored at the library" loading="lazy" />
          </div>
          <div className="visit-copy">
            <div className="eyebrow eyebrow-light"><span /> COME ON IN</div>
            <h2>We saved<br />you a <em>spot.</em></h2>
            <p>Drop by for a browse, stay for a while. Your next favorite corner is closer than you think.</p>
            <div className="visit-details">
              <div><span>FIND US</span><strong>Your neighborhood library</strong><small>Ask a local for directions</small></div>
              <div><span>OPENING HOURS</span><strong>Monday – Saturday</strong><small>9:00 AM – 6:00 PM</small></div>
            </div>
            <a className="button button-light" href="mailto:hello@brightfuturelibrary.org">Get in touch <ArrowIcon /></a>
          </div>
        </section>

        <section className="newsletter-section section-wrap">
          <div className="newsletter-flower" aria-hidden="true">✳</div>
          <div className="newsletter-copy">
            <div className="eyebrow"><span /> A NOTE FROM THE LIBRARY</div>
            <h2>Good things, <em>occasionally.</em></h2>
            <p>Get book picks, upcoming events, and little library news in your inbox.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label htmlFor="newsletter-email">Your email address</label>
            <div className="email-entry">
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@gmail.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubscribed(false);
                }}
                required
              />
              <button type="submit" aria-label="Subscribe to library updates"><ArrowIcon /></button>
            </div>
            <p className={subscribed ? 'form-note form-success' : 'form-note'} aria-live="polite">
              {subscribed ? 'Thanks for signing up! We look forward to sharing library news.' : 'No spam, ever. Just the good stuff.'}
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <Brand />
          <p>A brighter future begins with a story.</p>
          <div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#books">Books</a><a href="#events">Events</a></div>
          <span className="copyright">© 2026 Bright Future Library</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

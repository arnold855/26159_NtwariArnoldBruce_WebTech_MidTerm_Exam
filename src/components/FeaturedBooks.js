import React, { useState } from 'react';
import './FeaturedBooks.css';

const books = [
  {
    id: 1,
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    genre: 'Fiction',
    rating: 5,
    color: '#c0392b',
    desc: 'A landmark African novel that explores the life of Okonkwo and the clash between Igbo tradition and the arrival of European colonialism in Nigeria.',
  },
  {
    id: 2,
    title: 'Educated',
    author: 'Tara Westover',
    genre: 'Memoir',
    rating: 5,
    color: '#2980b9',
    desc: 'A remarkable memoir about a woman who grows up in a survivalist family in rural Idaho and, through sheer determination, educates herself all the way to Cambridge University.',
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    rating: 4,
    color: '#27ae60',
    desc: 'A practical, science-backed guide to building good habits and breaking bad ones through tiny, incremental changes that compound into remarkable results over time.',
  },
  {
    id: 4,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    rating: 5,
    color: '#d35400',
    desc: "An inspiring philosophical novel following Santiago, a young Andalusian shepherd, on his journey across the desert in search of treasure and his personal legend.",
  },
  {
    id: 5,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'History',
    rating: 4,
    color: '#8e44ad',
    desc: 'A sweeping narrative of human history from the Stone Age to the twenty-first century, exploring how biology and history have shaped human societies and cultures.',
  },
  {
    id: 6,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic',
    rating: 5,
    color: '#16a085',
    desc: 'A Pulitzer Prize-winning novel set in the American South, exploring racial injustice and moral growth through the eyes of young Scout Finch and her father, Atticus.',
  },
];

const genres = ['All', ...new Set(books.map((b) => b.genre))];

function StarRating({ count }) {
  return (
    <span className="star-rating" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
      {'☆'.repeat(5 - count)}
    </span>
  );
}

function FeaturedBooks() {
  const [activeGenre, setActiveGenre] = useState('All');

  const filtered = activeGenre === 'All'
    ? books
    : books.filter((b) => b.genre === activeGenre);

  return (
    <section id="books" className="featured-books section" aria-labelledby="books-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Must Reads</span>
          <h2 id="books-heading" className="section-title">Featured Books</h2>
          <p className="section-desc">
            Handpicked titles recommended by our librarians for readers of every interest.
          </p>
        </div>

        <div className="books__filters" role="group" aria-label="Filter books by genre">
          {genres.map((g) => (
            <button
              key={g}
              className={`filter-btn ${activeGenre === g ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveGenre(g)}
              aria-pressed={activeGenre === g}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="books__grid">
          {filtered.map((book) => (
            <article key={book.id} className="book-card">
              <div
                className="book-card__cover"
                style={{ background: `linear-gradient(145deg, ${book.color}, ${book.color}bb)` }}
                aria-hidden="true"
              >
                <span className="book-card__initials">
                  {book.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
                </span>
                <span className="book-card__genre-tag">{book.genre}</span>
              </div>
              <div className="book-card__body">
                <h3 className="book-card__title">{book.title}</h3>
                <p className="book-card__author">by {book.author}</p>
                <StarRating count={book.rating} />
                <p className="book-card__desc">{book.desc}</p>
                <button className="book-card__btn">Borrow This Book</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedBooks;

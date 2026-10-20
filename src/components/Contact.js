import React, { useState } from 'react';
import './Contact.css';

const INITIAL_FORM = { fullName: '', email: '', message: '' };
const INITIAL_ERRORS = { fullName: '', email: '', message: '' };

function validate(fields) {
  const errors = { ...INITIAL_ERRORS };
  let valid = true;

  if (!fields.fullName.trim()) {
    errors.fullName = 'Full name is required.';
    valid = false;
  } else if (fields.fullName.trim().length < 3) {
    errors.fullName = 'Name must be at least 3 characters.';
    valid = false;
  }

  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address (e.g. name@example.com).';
    valid = false;
  }

  if (!fields.message.trim()) {
    errors.message = 'Message is required.';
    valid = false;
  } else if (fields.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
    valid = false;
  }

  return { errors, valid };
}

function Contact() {
  const [form, setForm]         = useState(INITIAL_FORM);
  const [errors, setErrors]     = useState(INITIAL_ERRORS);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear individual field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors: newErrors, valid } = validate(form);
    if (!valid) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setErrors(INITIAL_ERRORS);
  };

  const handleReset = () => setSubmitted(false);

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 id="contact-heading" className="section-title" style={{ color: '#ffffff' }}>
            Contact Us
          </h2>
          <p className="section-desc" style={{ color: '#a8c8e0' }}>
            We'd love to hear from you. Visit us, call us, or send a message below.
          </p>
        </div>

        <div className="contact__grid">

          {/* ── Contact info ── */}
          <aside className="contact__info">
            <h3>Library Information</h3>

            <div className="info-item">
              <span className="info-item__icon" aria-hidden="true"></span>
              <div>
                <strong>Address</strong>
                <p>14 Knowledge Avenue,<br />Bright Town, BT 2024,<br />Rwanda</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-item__icon" aria-hidden="true"></span>
              <div>
                <strong>Telephone</strong>
                <p>+250 788 123 456</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-item__icon" aria-hidden="true"></span>
              <div>
                <strong>Email</strong>
                <p>info@brightfuturelibrary.rw</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-item__icon" aria-hidden="true"></span>
              <div>
                <strong>Opening Hours</strong>
                <p>Mon – Fri: 8:00 AM – 7:00 PM<br />Saturday: 9:00 AM – 5:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </aside>

          {/* ── Contact form ── */}
          <div className="contact__form-wrapper">
            {submitted ? (
              <div className="contact__success" role="alert">
                <span className="success-icon" aria-hidden="true"></span>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out to Bright Future Library. We have received your message
                  and will get back to you within 1–2 business days.
                </p>
                <button className="contact__reset-btn" onClick={handleReset}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <h3>Send Us a Message</h3>

                {/* Full Name */}
                <div className={`form-group ${errors.fullName ? 'form-group--error' : ''}`}>
                  <label htmlFor="fullName">Full Name <span aria-hidden="true">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    aria-required="true"
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <span id="fullName-error" className="form-error" role="alert">
                      ⚠ {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className={`form-group ${errors.email ? 'form-group--error' : ''}`}>
                  <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error" role="alert">
                      ⚠ {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className={`form-group ${errors.message ? 'form-group--error' : ''}`}>
                  <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <span id="message-error" className="form-error" role="alert">
                      ⚠ {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="contact__submit-btn">
                  Send Message →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

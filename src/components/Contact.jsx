import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <h1 className="section-title autoDisplay">Let's talk 😊</h1>

        <div className="social-box autoBlur">
          <a href="tel:+39111222444">
            <i className="bx bxs-phone"></i> +39 111 222 444
          </a>
          <a href="https://t.me/example" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-telegram"></i> Contact Example.com
          </a>
          <a
            href="https://www.linkedin.com/in/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin-square"></i> Contact Example.com
          </a>

          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-youtube"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-facebook-circle"></i>
            </a>
          </div>
        </div>

        <div className="contact-box autoBlur">
          <p>
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          <label>Full Name</label>
          <input placeholder="Your Full name" type="text" />

          <label>Email Address</label>
          <input placeholder="Your Email" type="email" />

          <label>Your Message</label>
          <textarea
            className="input-message"
            placeholder="Share your thoughts..."
          />

          <button>
            Send Message <i className="bx bx-mail-send"></i>
          </button>
        </div>
      </section>

      <footer className="footer">
        <h1>©️2025</h1>
        <div className="box-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-youtube"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;

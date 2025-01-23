import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container my-5">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">We'd love to hear from you. Get in touch!</p>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-md-6 mb-4">
            <h3 className="fw-bold">Our Address</h3>
            <p>123 PS Shop Avenue, Main Street, New York, NY 10001</p>
            <h3 className="fw-bold">Phone</h3>
            <p>+1 (555) 123-4567</p>
            <h3 className="fw-bold">Email</h3>
            <p>support@psshop.com</p>
            <h3 className="fw-bold">Working Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h3 className="fw-bold mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


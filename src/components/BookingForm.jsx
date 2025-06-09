import React from 'react';

const BookingForm = () => {
  return (
    <section className="form-section">
      <div className="form-card">
        <h2>Event Information</h2>
        <form className="booking-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" placeholder="Enter full name" />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="Enter email address" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
            <div className="form-group">
              <label>Event Type *</label>
              <select>
                <option>Select an event type</option>
              </select>
            </div>
            <div className="form-group">
              <label>Event Date *</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Estimated Guests</label>
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="form-group full-width">
            <label>Additional Details</label>
            <textarea placeholder="Tell us about your event needs..." rows="4"></textarea>
          </div>
          <div className="submit-button-container">
            <button type="submit">Submit Booking Request</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;

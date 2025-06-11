import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/booking.css';
import { FaUser, FaPhoneAlt, FaEnvelope, FaRegCalendarAlt } from 'react-icons/fa';

const Book = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    details: '',
  });

  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, eventType, eventDate } = formData;

    if (!fullName.trim() || !email.trim() || !eventType.trim() || !eventDate.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guests: '',
      details: '',
    });
    navigate('/thank-you');

  };

  return (
    <div className="booking-page">
      {/* Intro Message */}
      <section className="intro-section">
        <div className="intro-container">
          <h1>Book Your Event</h1>
          <p>
            We're thrilled at the prospect of making your event truly special. To begin, please
            complete our consultation form. This will help us understand your needs and preferences,
            ensuring we craft an experience that reflects your unique vision.
          </p>
          <p>Let's create unforgettable memories together.</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="form-section">
        <div className="form-card">
          <h2>Event Information</h2>
          <form className="booking-form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Full Name */}
              <div className="form-group icon-input">
                <label htmlFor="fullName">
                  Full Name <span className="required-star">*</span>
                </label>
                <div className="input-icon-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-group icon-input">
                <label htmlFor="email">
                  Email Address <span className="required-star">*</span>
                </label>
                <div className="input-icon-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="form-group icon-input">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-icon-wrapper">
                  <FaPhoneAlt className="input-icon phone-icon" />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Event Type */}
              <div className="form-group">
                <label htmlFor="eventType">
                  Event Type <span className="required-star">*</span>
                </label>
                <select
                  id="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an event type</option>
                  <option>Birthday Party</option>
                  <option>Engagement Proposal</option>
                  <option>Wedding</option>
                  <option>Bridal Shower</option>
                  <option>Baby Shower</option>
                  <option>Conference</option>
                  <option>Seminar</option>
                  <option>Product Launch</option>
                  <option>Gala Dinner</option>
                  <option>Fashion Show</option>
                  <option>Model Casting</option>
                  <option>Runway Production</option>
                  <option>Professional Ushers</option>
                  <option>Event Staffing</option>
                  <option>Logistics Management</option>
                </select>
              </div>

              {/* Event Date */}
              <div className="form-group icon-input">
                <label htmlFor="eventDate">
                  Event Date <span className="required-star">*</span>
                </label>
                <div className="input-icon-wrapper">
                  <FaRegCalendarAlt className="input-icon calendar-icon" />
                  <input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Estimated Guests */}
              <div className="form-group">
                <label htmlFor="guests">Estimated Guests</label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>1–20</option>
                  <option>21–50</option>
                  <option>51–100</option>
                  <option>101–200</option>
                  <option>201–500</option>
                  <option>500+</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="details">Additional Details</label>
              <textarea
                id="details"
                placeholder="Tell us about your event needs..."
                rows="4"
                value={formData.details}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="submit-button-container">
              <button type="submit">Submit Booking Request</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Book;

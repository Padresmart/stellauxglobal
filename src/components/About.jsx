import React from 'react'
import { Link } from 'react-router-dom'
import bride from '../assets/bride.webp'
import '../styles/about.css'

const About = () => {
  return (
<section id="about" className="about-section">
  <div className="about-container">
    <div className="about-text">
      <h2>About Us</h2>
      <p>
        Welcome to Stellaux Events, where we believe that every event is a story waiting to be told.
        Our journey began with a simple yet profound vision: to create unforgettable experiences that resonate with the heart and soul.
      </p> 
      <p>
        Imagine a radiant bride stepping into a moment of bliss with her prince charming – 
        the perfect wedding, just as she envisioned.
      </p>
      <p>
        At Stellaux, our mission transcends planning and managing events; we are dedicated to crafting memories that you'll cherish forever.
      </p>
      <p>
        From romantic proposals to joyful baby showers, stylish weddings to heartfelt surprises, 
        we bring your vision to life.
      </p>
      <p>
        Step into a world where every detail is curated to perfection. At Stellaux Events, 
        we specialize in transforming your visions into memorable experiences. Our expertise spans 
        a diverse range of events, including social gatherings, corporate functions, entertainment showcases, 
        fashion events, networking meetups, experiential activations, and educational seminars.
      </p>
      <h4>Why Choose Us?</h4>
      <p>
        Because we don't just plan events, we craft experiences. Our dedicated team is committed to excellence, 
        ensuring that every aspect of your event is meticulously planned and flawlessly executed. 
        We thrive on bringing your unique vision to life, creating events that leave a lasting impression.
      </p>
      <p><strong>Ready to Elevate Your Event?</strong><br />
        Let's turn your ideas into reality. <Link to="/book" >Book a consultation</Link> with us today, and embark on a journey to create an event that transcends the ordinary.
      </p>
    </div>
    <div className="about-image">
      <img src={bride} alt="bride" />
    </div>
  </div>
</section>

  )
}

export default About

import { Link } from 'react-router-dom';
import '../styles/hero.css';

export default function HeroSection() {
  return (
    <section className="hero" id="home">
       
      <div className="hero-content">
         
        <h1>Welcome to Stellaux Global</h1>
        <p>Where we transform ordinary days into unforgettable memories.</p>
        <Link to="/book" className="hero-btn">Book Your Event</Link>
      </div>
    </section>
  );
}

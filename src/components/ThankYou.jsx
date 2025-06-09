import { useNavigate } from 'react-router-dom';
import '../styles/thankyou.css';

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div className="thankyou-bg">
      <div className="thankyou-container">
        <div className="thankyou-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#e0e7ff"/>
            <path d="M20 34l8 8 16-16" stroke="#5c4dff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        <h1>Thank You for Your Booking!</h1>
        <p className="thankyou-lead">
          Your booking request has been <span className="thankyou-highlight">successfully received</span>.
        </p>
        <p>
          A confirmation email will be sent to you shortly.<br />
          We look forward to making your event <span className="thankyou-highlight">unforgettable</span>.
        </p>
        <button className="btn-home" onClick={() => navigate('/')}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
import React, { useState } from 'react';
import '../styles/faqsection.css';

const faqs = [
  {
    question: 'Why should I hire an event planner?',
    answer:
      'Hiring an event planner like Stellaux ensures that every detail of your event is meticulously managed, allowing you to enjoy the occasion without stress.',
  },
  {
    question: 'What types of events do you specialize in?',
    answer: 'We specialize in weddings, corporate events, private parties, and more.',
  },
  {
    question: 'How far in advance should I book your services?',
    answer: 'We recommend booking at least 2-3 months in advance for proper planning.',
  },
  {
    question: 'Do you offer customizable packages?',
    answer: 'Yes, all our packages can be tailored to meet your specific needs.',
  },
  {
    question: 'What is your payment and cancellation policy?',
    answer: 'A 50% deposit is required to confirm booking. Cancellations within 2 weeks are non-refundable.',
  },
  {
    question: 'Can you work within my budget?',
    answer: 'Absolutely! We offer solutions to suit different budget ranges.',
  },
  {
    question: 'Do you handle vendor coordination?',
    answer: 'Yes, we manage all vendor communications and timelines.',
  },
  {
    question: 'Will you be present on the event day?',
    answer: 'Yes, our team will be on-site to oversee the event and address any last-minute needs.'
  },
  {
    question: 'How do I get started with planning my event?',
    answer: 'Contact us through our website or call us directly to schedule a consultation.'
  
  },
  {
    question: 'What makes Stellaux different from other event planners?',
    answer: 'Our personalized approach, attention to detail, and commitment to excellence set us apart in the event planning industry.'
  },
  { question: 'Do you offer services outside Lagos?',
    answer: 'Yes, we can coordinate events in various locations, depending on the requirements and logistics involved.'
  },
  {
    question: 'Can you help with event design and decor?',
    answer: 'Yes, we offer comprehensive design and decor services to bring your vision to life.'
  },
  {
    question: 'What if I have a last-minute request?',
    answer: 'We strive to accommodate last-minute requests whenever possible, ensuring your event runs smoothly.'
  },
  {
    question: 'How do you ensure the quality of vendors you work with?',
    answer: 'We have a vetted list of trusted vendors and maintain strong relationships to ensure quality service.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section" id='faq'>
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={`caret ${openIndex === index ? 'open' : ''}`}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

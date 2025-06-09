import React from "react";
import "../styles/services.css"; // Ensure you have the correct path to your CSS file

const servicesData = [
  {
    title: "Social Events",
    items: ["Birthdays", "Engagement Proposals", "Weddings", "Bridal & Baby Showers"],
  },
  {
    title: "Corporate Events",
    items: ["Conferences", "Seminars", "Product Launches", "Gala Dinner"],
  },
  {
    title: "Fashion Events",
    items: ["Fashion Shows", "Model Castings", "Runway Productions"],
  },
  {
    title: "Event Support",
    items: ["Professional Ushers", "Event Staffing", "Logistics Management"],
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item, i) => (
                <li key={i}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

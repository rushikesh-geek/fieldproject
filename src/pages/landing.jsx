import React from "react";
import "./../styles/pages.css";

const Landing = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1>Welcome to the Doctor Dashboard</h1>
        <p>
          The premium solution for managing patient data, enabling research,
          and delivering better care.
        </p>
        <div className="cta-buttons">
          <button className="primary" onClick={() => window.location.href = "/login"}>
            Login
          </button>
          <button className="secondary" onClick={() => window.location.href = "/register"}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <header className="header">
        <img src="/path/to/logo.png" alt="Hospital Logo" className="logo" />
      </header>

      <div className="home-container">
        <div className="login-buttons">
          <div className="DOCTOR">
            <img src="doctor-image.png" alt="Doctor" className="card-image" />
            <div className="label">DOCTOR</div>
          </div>

          <div className="PATIENT">
            <img src="patient-image.png" alt="Patient" className="card-image" />
            <div className="label">PATIENT</div>
          </div>

          <div className="STAFF">
            <img src="staff-image.png" alt="Staff" className="card-image" />
            <div className="label">STAFF</div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <h1>Copyright 2025 HKare</h1>
      </footer>
    </div>
  );
};

export default HomePage;

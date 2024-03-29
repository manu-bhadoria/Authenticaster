import React from 'react';
import Navbar from './NavBar'; 
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-section">
        <div className="logo-container">
          <span className="logo-text">Authenticaster</span>
        </div>
      </div>
      <div className="content">
        <p>Authenticaster is a service that tells you the reliability score of any post in the launchcaster service.</p>
      </div>
    </div>
  );
};

export default HomePage;

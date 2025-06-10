import React, { useState } from 'react';
import restaurantLogo from '../icons_assets/Logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
  const [menuopen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuopen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={restaurantLogo} alt="Restaurant Logo" />
      </Link>
      {/* mobile navbar */}
      <div className='menu-icon' onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* nav items */}

      <ul className={`nav-links ${menuopen ? 'visible' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><a href="#contact">Order Online</a></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

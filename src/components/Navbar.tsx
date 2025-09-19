import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import bulb from '../assets/lightbulb.svg';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo" style={{display: 'flex', alignItems: 'center', gap: 8}}>
      <img src={bulb} alt="BulbAI" style={{width: 32, height: 32}} />
      <Link to="/">BulbAI</Link>
    </div>
    <ul className="nav-links">
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/community">Community</Link></li>
      <li><Link to="/settings">Settings</Link></li>
      <li><Link to="/profile/me">Profile</Link></li>
    </ul>
    <DarkModeToggle />
  </nav>
);

export default Navbar;

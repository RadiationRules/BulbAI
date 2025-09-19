import React from 'react';
import { Link } from 'react-router-dom';

import DarkModeToggle from './DarkModeToggle';
import AuthMenu from './AuthMenu';


const Navbar = () => (
  <nav className="navbar">
    <div className="logo" style={{display: 'flex', alignItems: 'center', gap: 8}}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: 4}}>
        <path d="M12 2C7.03 2 3 6.03 3 11c0 2.38 1.19 4.47 3 5.74V19a2 2 0 0 0 2 2h2v-2h2v2h2a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-4.97-4.03-9-9-9zm1 17h-2v-1h2v1zm3-3.26V19a.997.997 0 0 1-1 1h-2v-2h-2v2H8a.997.997 0 0 1-1-1v-2.26C5.19 15.47 4 13.38 4 11c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.38-1.19 4.47-3 5.74z" fill="#FFD600"/>
        <circle cx="12" cy="11" r="5" fill="#FFF9C4"/>
      </svg>
      <Link to="/">BulbAI</Link>
    </div>
    <ul className="nav-links">
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/community">Community</Link></li>
      <li><Link to="/settings">Settings</Link></li>
    </ul>
    <DarkModeToggle />
    <AuthMenu />
  </nav>
);

export default Navbar;

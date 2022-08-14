import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <Link to={'/'} className="link">
          Contact App
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

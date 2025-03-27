import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Главная</Link>
      <Link to="/about" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>О создателе</Link>
    </nav>
  );
};

export default Navbar;

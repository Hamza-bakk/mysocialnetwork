import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
};

const ulStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'flex-end',
};

const liStyle = {
  marginRight: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 'bold',
  transition: 'color 0.3s',
};


function Navbar() {
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/signup" style={linkStyle}>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

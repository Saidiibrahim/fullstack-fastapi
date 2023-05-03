// src/layouts/Main/components/CustomHeader.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const CustomHeader: React.FC = () => {
  return (
    <header style={headerStyles}>
      <div style={logoStyles}>My App</div>
      <nav>
        <ul style={navListStyles}>
          <li style={navListItemStyles}>
            <Link to="/" style={navLinkStyles}>Home</Link>
          </li>
          <li style={navListItemStyles}>
            <Link to="/about" style={navLinkStyles}>About</Link>
          </li>
          <li style={navListItemStyles}>
            <Link to="/contact" style={navLinkStyles}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#333',
  color: 'white',
};

const logoStyles = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const navListStyles = {
  display: 'flex',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

const navListItemStyles = {
  marginLeft: '1rem',
};

const navLinkStyles = {
  color: 'white',
  textDecoration: 'none',
};

export default CustomHeader;

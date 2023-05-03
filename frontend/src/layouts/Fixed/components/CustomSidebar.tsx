// src/layouts/Fixed/components/CustomSidebar.tsx
import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

const CustomSidebar: React.FC = () => {
  return (
    <aside style={sidebarStyles}>
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
    </aside>
  );
};

const sidebarStyles: CSSProperties = {
  width: '200px',
  height: '100%',
  backgroundColor: '#333',
  position: 'fixed',
  left: 0,
  top: 0,
  padding: '1rem',
};

const navListStyles: CSSProperties = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

const navListItemStyles: CSSProperties = {
  marginBottom: '1rem',
};

const navLinkStyles: CSSProperties = {
  color: 'white',
  textDecoration: 'none',
};

export default CustomSidebar;

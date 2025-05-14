import React from 'react';
import './Menu.css'; // Add CSS styles for the menu
import { FaHome, FaChartLine, FaTable, FaSearch, FaInfoCircle,FaPhoneAlt } from 'react-icons/fa';
import Homesub from '../home/Homesub';

const Menu = ({ onSelect }) => {
    const menuItems = [
      { label: 'Home', icon: <FaHome /> },
      { label: 'Analysis', icon: <FaChartLine /> },
      { label: 'Data View', icon: <FaTable /> },
      { label: 'Inspection', icon: <FaSearch /> },
      { label: 'About', icon: <FaInfoCircle /> },
      { label: 'Contact Us', icon: <FaPhoneAlt /> }
    ];

  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <button
          key={item.label}
          className="menu-item"
          onClick={() => onSelect(item.label)}
        >
          <span className="menu-icon">{item.icon}</span>
          <span className="menu-label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Menu;

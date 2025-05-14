import React, { useState } from 'react';
import Menu from './Menu'; // Import the Menu component
import About from '../about/About';

import Home from "../home/Home";
import Analysis from "../analysis/Analysis";
import Dataview from "../dataview/Dataview";
import Inspection from "../inspection/Inspection";
import Contactus from "../contactus/Contactus";
import Homesub from '../home/Homesub';

import './Main.css';

const Main = () => {
  const [activeComponent, setActiveComponent] = useState(null); // No active component initially
  const [showHomesub, setShowHomesub] = useState(true); // Show Homesub initially

  const handleSelect = (menuItem) => {
    setActiveComponent(menuItem); // Update the active component
    setShowHomesub(false); // Disable Homesub once a button is clicked
  };

  return (
    <div className="glass-text">
      {/* Pass handleSelect to Menu as a prop */}
      <Menu onSelect={handleSelect} />
      <div className="content">
        {/* Render active component */}
        {activeComponent === 'About' && <About />}
        {activeComponent === 'Home' && <Home onSelect={handleSelect} />}
        {activeComponent === 'Analysis' && <Analysis onSelect={handleSelect}/>}
        {activeComponent === 'Data View' && <Dataview onSelect={handleSelect}/>}
        {activeComponent === 'Inspection' && <Inspection onSelect={handleSelect}/>}
        {activeComponent === 'Contact Us' && <Contactus onSelect={handleSelect}/>}
      </div>
      {/* Show Homesub only if showHomesub is true */}
      {showHomesub && (
        <div className='Lines1'>
          <Homesub />
        </div>
      )}
    </div>
  );
};

export default Main;

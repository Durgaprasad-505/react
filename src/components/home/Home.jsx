// import React from 'react';
// import './Home.css'; // Import About CSS

// const Home = () => {
//   return (
//     <div className="Header"> {/* Use the new specific class */}
//     </div>

//   );
// };

// export default Home;

// import React, { Component, useState } from 'react';
// // import Menu from './Menu';
// import './Home.css';
// import About from "/home/prasad/Desktop/Prasad_AWS/react_js/cage/src/components/about/About";
// import Menu from "/home/prasad/Desktop/Prasad_AWS/react_js/cage/src/components/dashbord/Menu";

// const Home = () => {
//   const [activeComponent, setActiveComponent] = useState('Home');

//   // Function to handle menu selection
//   const handleSelect = (label) => {
//     setActiveComponent(label);
//   };

//   return (
//     <div className="header">
//       <div className="header-title">
//         <h1>Home Page</h1>
//       </div>
//       <Menu onSelect={handleSelect} /> {/* Add Menu component */}
//       <div className="content">
//         {/* Conditional rendering based on activeComponent */}
//         {/* {activeComponent === 'About' && <About />} */}
//         {/* {activeComponent === 'Contact Us' && <Contact />} */}
//         {/* {activeComponent === 'Data View' && <DataView />} */}
//         {/* {activeComponent === 'Analysis' && <Analysis />} */}
//         {/* {activeComponent === 'Inspection' && <Inspection />} */}
//         {/* Add more components as needed */}
//       </div>
//     </div>
//   );
// };

// export default Home;
// Component
//     about
//         About.css
//         About.jsx
//     dashbord
//         Main.css
//         Main.jsx
//         Menu.css
//         Menu.jsx
//     home
//         home.jsx
//         home.css
// App.jsx
// App.

import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faInfoCircle, faPhoneAlt, faTable,faChartLine } from '@fortawesome/free-solid-svg-icons';
import App3 from '../../smaple';
import logo from "./image2.jpg"


const Home = ({ onSelect }) => {
  return (
    <div className="h-header">
      <img src={logo} alt="Display" className="logo" />
      <div className="h-menu-icons">
        <FontAwesomeIcon className="h-fa-icon" icon={faChartLine} onClick={() => onSelect('Analysis')} title="Analysis" />
        <FontAwesomeIcon className="h-fa-icon" icon={faTable} onClick={() => onSelect('Data View')} title="Dataview" />
        <FontAwesomeIcon className="h-fa-icon" icon={faSearch} onClick={() => onSelect('Inspection')} title="Inspection" />
        <FontAwesomeIcon className="h-fa-icon" icon={faInfoCircle} onClick={() => onSelect('About')} title="About" />
        
      </div>
      <div className="h-ground">
        {/* <h1>Home Page</h1> */}
        <App3/>
      </div>
    </div>
  );
};

export default Home;

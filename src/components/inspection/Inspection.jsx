import React from 'react';
import './Inspection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhoneAlt, faTable, faQuestionCircle,faChartLine } from '@fortawesome/free-solid-svg-icons';
import App3 from '../../smaple';
import Inspectionsub from './Inspectionsub1';
import logo from './image2.jpg'


const Inspection = ({ onSelect }) => {
  return (
    <div className="i-header">
        <img src={logo} alt="Display" className="logo" />
      <div className="i-menu-icons">
        <FontAwesomeIcon className="i-fa-icon" icon={faHome} onClick={() => onSelect('Home')} title="Home" />
        <FontAwesomeIcon className="i-fa-icon" icon={faChartLine} onClick={() => onSelect('Analysis')} title="Analysis" />
        <FontAwesomeIcon className="i-fa-icon" icon={faTable} onClick={() => onSelect('Data View')} title="Dataview" />
        <FontAwesomeIcon className="i-fa-icon" icon={faInfoCircle} onClick={() => onSelect('About')} title="About" />   
      </div>
      <div className="i-ground">
        {/* <h1>Inspection Page</h1> */}
        <Inspectionsub/>
        {/* <App3/> */}

      </div>
    </div>
  );
};

export default Inspection;

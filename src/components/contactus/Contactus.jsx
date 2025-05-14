import React from 'react';
import './Contactus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faSearch,faInfoCircle, faTable,faChartLine } from '@fortawesome/free-solid-svg-icons';


const Contactus = ({ onSelect }) => {
  return (
    <div className="c-header">
      <div className="c-menu-icons">
        <FontAwesomeIcon className="c-fa-icon" icon={faHome} onClick={() => onSelect('Home')} title="Home" />
        <FontAwesomeIcon className="c-fa-icon" icon={faChartLine} onClick={() => onSelect('Analysis')} title="Analysis" />
        <FontAwesomeIcon className="c-fa-icon" icon={faTable} onClick={() => onSelect('Data View')} title="Dataview" />
        <FontAwesomeIcon className="c-fa-icon" icon={faSearch} onClick={() => onSelect('Inspection')} title="Inspection" />
        <FontAwesomeIcon className="c-fa-icon" icon={faInfoCircle} onClick={() => onSelect('About')} title="About" />
      </div>
      <div className="c-ground">
        <h1>Contactus Page</h1>

      </div>
    </div>
  );
};

export default Contactus;

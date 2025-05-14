import React from 'react';
import './Analysis.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhoneAlt, faTable, faQuestionCircle,faSearch } from '@fortawesome/free-solid-svg-icons';


const Analysis = ({ onSelect }) => {
  return (
    <div className="a-header">
      <div className="a-menu-icons">
        <FontAwesomeIcon className="a-fa-icon" icon={faHome} onClick={() => onSelect('Home')} title="Home" />
        <FontAwesomeIcon className="a-fa-icon" icon={faTable} onClick={() => onSelect('Data View')} title="Dataview" />
        <FontAwesomeIcon className="a-fa-icon" icon={faSearch} onClick={() => onSelect('Inspection')} title="Inspection" />
        {/* <FontAwesomeIcon icon={faPhoneAlt} onClick={() => onSelect('Contact Us')} title="Contactus" /> */}
        <FontAwesomeIcon className="a-fa-icon" icon={faInfoCircle} onClick={() => onSelect('About')} title="About" />
        {/* <FontAwesomeIcon icon={faEye} onClick={() => onSelect('View')} title="View" /> */}
        {/* <FontAwesomeIcon icon={faQuestionCircle} onClick={() => onSelect('Help')} title="Help" /> */}
      </div>
      <div className="a-ground">
        <h1>Analysis page</h1>

      </div>
    </div>
  );
};

export default Analysis;

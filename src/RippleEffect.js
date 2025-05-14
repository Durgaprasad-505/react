import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery.ripples';
import './RippleEffect.css'; // Import RippleEffect styles
import Main from './components/dashbord/Main';
import Homesub from './components/home/Homesub'

const RippleEffect = () => {
  useEffect(() => {
    $('#ripple-bg').ripples({
      resolution: 800,
      dropRadius: 20,
      perturbance: 0.09,
    });

    $('#ripple-bg').on('mousedown', function (e) {
      const x = e.pageX - $(this).offset().left;
      const y = e.pageY - $(this).offset().top;
      $(this).ripples('drop', x, y, 20, 0.09);
    });

    return () => {
      $('#ripple-bg').ripples('destroy');
    };
  }, []);

  return (
    <div className="ripple-container">
      <div id="ripple-bg"></div>

      <div className="header-1">
        <h1>Gaugee</h1>
      </div>
      <div className="header-2">
        <h1>Inspection</h1>
      </div>
      {/* Render the About component */}
      < Main />
      
    </div>
  );
};

export default RippleEffect;

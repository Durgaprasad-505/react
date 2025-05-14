import React from "react";
import "./Homesub1.css";
import Lines from "./Homesub1";

export default function Homesub() {
  return (
    <div className="container">
      <div className="vision">
        <h1>Vision</h1>
      </div>
      <div className="automations">
        <h1>Automations</h1>
      </div>
      <div className="Services">
        <h1>Services</h1>
      </div>
      <div className="Quality">
        <h1>Quality</h1>
      </div>
      <div className="Manufacturing">
        <h1>Manufacturing</h1>
      </div>

      <div className="lines2"> 
         <Lines />  
      </div>

      <div className="ssa">
        <h1>SSA</h1>
      </div>
    </div>
  );
}

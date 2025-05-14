import React, { useEffect, useState } from 'react';
import './Inspectionsub1.css';
import img6 from "./img7.png"

const Inspectionsub = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targetCounts = [100, 200, 300, 400]; // Target values for each box

  // Function to increment counts over time
  useEffect(() => {
    const intervalIds = counts.map((_, index) =>
      setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < targetCounts[index]) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, 20)
    );

    // Clear intervals when target counts are reached
    return () => intervalIds.forEach(id => clearInterval(id));
  }, []);

  return (
    <div className="container">
      <div className="image-container">
      <img src={img6} alt="Display" />
      </div>
      <div className="box-container">
        {['ACCEPT COUNT', 'REJECT COUNT', 'TOTAL COUNT', 'SHIFT COUNT'].map((title, index) => (
          <div className="box" key={index} style={{ backgroundColor: `hsl(${index * 90}, 70%, 50%)` }}>
            <div className="box-title">
              {title} <span className="symbol">★</span>
            </div>
            <div className="box-count">{counts[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspectionsub;

// import React from 'react';
// import logo from '../../logo.png'; // Adjusted path to logo
// import logo1 from './about.png'
// import logo2 from './logo1.jpg'
// import './About.css'; // Import About CSS

// const About = () => {
//   return (
//     <div className="about-container"> {/* Use the new specific class */}
//       <img src={logo} className="App-logo" alt="Company Logo" />
//       <img src={logo1} className="App-logo1" alt="Company Logo" />
      
//       <h6 className='About-content1' >Industrial Manufacturing

// It is the use of equipment to automate systems or production processes. The end goal is to drive greater efficiency by either increasing production capacity or reducing costs, often both.</h6>
//       <h6 className='About-content2'>
//         SS Automation is an innovative technology solutions company specializing in Discrete solutions, 
//         Product Engineering, Process Engineering, Manufacturing Engineering, and relevant process aids by providing unmanned solutions to execute production. 
//         We develop a transparent, value-based relationship, leveraging the extensive experience of our team to provide advanced solutions to a wide range of technology segments that enable our customers to successfully accomplish their business goals.
//       </h6>
//       <img src={logo2} className="App-logo2" alt="Company Logo" />
      
//     </div>

//   );
// };

// export default About;


import React from 'react';
import logo from '../../logo.png'; // Adjusted path to logo
import logo1 from './about.png'
import logo2 from './logo1.jpg'
import './About.css'; // Import About CSS

const About = () => {
  return (
    
    <div className="about-container"> {/* Use the new specific class */}
      <div className='box1'></div>
      <h1 className='box2'></h1>
      <h1 className='box3'></h1>
      <h1 className='box4'></h1>
      <h1 className='box5'>About Us</h1>
      <h1 className='box6'></h1>
      <h1 className='box7'></h1>
      <h1 className='box8'></h1>
      <h5 className='box9'>
         SS Automation is an innovative technology solutions company specializing in Discrete solutions, 
         Product Engineering, Process Engineering, Manufacturing Engineering, and relevant process aids by providing unmanned solutions to execute production. 
         We develop a transparent, value-based relationship, leveraging the extensive experience of our team to provide advanced solutions to a wide range of technology segments that enable our customers to successfully accomplish their business goals.
      </h5>

      
    </div>

  );
};

export default About;


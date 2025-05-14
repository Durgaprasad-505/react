// import React, { useEffect } from 'react'
// import * as THREE from 'three'
// import { Canvas } from '@react-three/fiber'
// import { useSprings, a } from '@react-spring/three'


// import './sample.css'

// const number = 35
// const colors = ['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']
// const random = (i: number) => {
//   const r = Math.random()
//   return {
//     position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
//     color: colors[Math.round(Math.random() * (colors.length - 1))],
//     scale: [1 + r * 14, 1 + r * 14, 1],
//     rotation: [0, 0, THREE.MathUtils.degToRad(Math.round(Math.random()) * 45)]
//   }
// }

// const data = new Array(number).fill(null).map(() => {
//   return {
//     color: colors[Math.round(Math.random() * (colors.length - 1))],
//     args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10]
//   }
// })

// function Content() {
//   const [springs, api] = useSprings(number, (i) => ({
//     from: random(i),
//     ...random(i),
//     config: { mass: 20, tension: 150, friction: 50 }
//   }))

//   useEffect(() => void setInterval(() => api.start((i) => ({ ...random(i), delay: i * 40 })), 3000), [])

//   return (
//     <>
//       {data.map((d, index) => (
//         <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
//           <boxGeometry attach="geometry" args={d.args} />
//           <a.meshStandardMaterial attach="material" color={springs[index].color} roughness={0.75} metalness={0.5} />
//         </a.mesh>
//       ))}
//     </>
//   )
// }

// function Lights() {
//   return (
//     <group>
//       <pointLight intensity={0.3} />
//       <ambientLight intensity={2} />
//       <spotLight
//         castShadow
//         intensity={0.2}
//         angle={Math.PI / 7}
//         position={[150, 150, 250]}
//         penumbra={1}
//         shadow-mapSize-width={2048}
//         shadow-mapSize-height={2048}
//       />
//     </group>
//   )
// }

// export default function App2() {
//   return (
//     <div className="body">
//       <Canvas linear flat shadows camera={{ position: [0, 0, 100], fov: 100 }}>
//         <Lights />
//         <Content />
//       </Canvas>
//     </div>
//   )
// }



// import React, { useRef } from 'react';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// // Helper function for asset URLs
// const url = (name, wrap = false) =>
//   `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

// export default function App2() {
//   const parallax = useRef(null);

//   return (
//     <div style={{ width: '100%', height: '100%', background: '#253237' }}>
//       <Parallax ref={parallax} pages={3}>
//         <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
//         <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

//         <ParallaxLayer
//           offset={0}
//           speed={0}
//           factor={3}
//           style={{
//             backgroundImage: url('stars', true),
//             backgroundSize: 'cover',
//           }}
//         />

//         <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
//           <img src={url('satellite4')} alt="Satellite" style={{ width: '15%', marginLeft: '70%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
//           <img src={url('cloud')} alt="Cloud" style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
//           <img src={url('cloud')} alt="Cloud" style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
//           <img src={url('cloud')} alt="Cloud" style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
//           <img src={url('cloud')} alt="Cloud" style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
//           <img src={url('cloud')} alt="Cloud" style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
//           <img src={url('cloud')} alt="Cloud" style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
//           <img src={url('cloud')} alt="Cloud" style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
//           <img src={url('cloud')} alt="Cloud" style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
//           <img src={url('cloud')} alt="Cloud" style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
//           <img src={url('cloud')} alt="Cloud" style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
//           <img src={url('cloud')} alt="Cloud" style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={2.5}
//           speed={-0.4}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             pointerEvents: 'none',
//           }}
//         >
//           <img src={url('earth')} alt="Earth" style={{ width: '60%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={2}
//           speed={-0.3}
//           style={{
//             backgroundSize: '80%',
//             backgroundPosition: 'center',
//             backgroundImage: url('clients', true),
//           }}
//         />

//         <ParallaxLayer
//           offset={0}
//           speed={0.1}
//           onClick={() => parallax.current.scrollTo(1)}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <img src={url('server')} alt="Server" style={{ width: '20%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={1}
//           speed={0.1}
//           onClick={() => parallax.current.scrollTo(2)}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <img src={url('bash')} alt="Bash" style={{ width: '40%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={2}
//           speed={-0}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//           onClick={() => parallax.current.scrollTo(0)}
//         >
//           <img src={url('clients-main')} alt="Clients" style={{ width: '40%' }} />
//         </ParallaxLayer>
//       </Parallax>
//     </div>
//   );
// }



// App3.jsx

import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './sample.module.css' // Import CSS Module
import img1 from './image1.jpg' // Replace with the path to your image
import img2 from './image2.jpg' // Replace with the path to your image
import img3 from './image3.jpg' // Replace with the path to your image

const Page = ({ offset, gradient, onClick }) => {

  // Choose image based on the offset value

  const getImage = () => {
    switch (offset) {
      case 10:
        return img1;
      case 1:
        return img2;
      case 22:
        return img3;
      default:
        return null;
    }
  };
  const getContent = () => {
    switch (offset) {
      case 0:
        return (
          <>
            <h3 className={styles.Headerp1}>Vision System</h3><br/><br/>
            {/* <h6 className={styles.descriptionp1}>SSA’s Vision System is a perfect amalgamation of Machine Vision Components to solve the Imaging Task.</h6><br/> */}
            <h4 className={styles.descriptionp1}>&gt;&gt;</h4>
            
            
          </>
        );
        case 1:
          return (
            <>
              <h3 className={styles.subHeaderp2}>SSA’s Vision System is a perfect amalgamation of</h3>
              <h3 className={styles.subHeaderp22}>Machine Vision Components to solve the Imaging Task</h3>
              <br />
              <h4 className={styles.descriptionp2}>&gt;&gt;</h4>
            </>
          );
        
      case 2:
        return (
          <>
            {/* <img src="https://via.placeholder.com/400" alt="img1" className={styles.image} /> */}
            <h3 className={styles.Headerp3}>Thank You :)</h3><br/><br/>
            <h1 className={styles.descriptionp3}>&lt;&lt;</h1>
            
          </>
        );
      default:
        return null;
    }
  }



  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <div className={styles.slopeBegin} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
      </ParallaxLayer>

      <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
        {/* Display image instead of number */}
        {/* <img src={getImage()} alt={`Page ${offset + 1}`} className={styles.pageImage} /> */}
        {/* <span>0{offset + 11}</span> */}
        {getContent()}
      </ParallaxLayer>
    </>
  );
};

export default function App3() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <div style={{ background: '#dfdfdf', marginTop: '-430px', height: '50px' }}>
      <Parallax className={styles.container} ref={parallax} pages={3} horizontal>
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  );
}

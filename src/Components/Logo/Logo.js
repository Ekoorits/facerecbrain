import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.jpg';
import './Logo.css';

const Logo = () => {
  return (
      <Tilt className="outerTilt ma4 mt0 shadow-2">
        <div className="innerTilt">
          <img alt="brainlogo" src={brain}/>
        </div>
      </Tilt>  
  );
}

export default Logo;
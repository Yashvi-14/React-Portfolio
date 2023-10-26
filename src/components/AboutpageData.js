import React from 'react';
import { Link } from 'react-router-dom';
import './AboutContentStyles.css';
import React1 from '../assets/react1.jpg';
import React2 from '../assets/react2.webp';

const AboutpageData = () => {
  console.log('React1 Image Source: ', React1);
  console.log('React2 Image Source: ', React2);

  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a FullStack Developer. I create responsive secure websites for
          my clients
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="imgs-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="React1" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="React2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutpageData;

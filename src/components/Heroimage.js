import "./HeroimageStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import IntroImg from "../assets/intro-bg.jpg";
const Heroimage = () => {
  return (
    <div className="hero">
       <div className="mask">
  <img className="into-img" src={IntroImg} alt="IntroImg" />
</div>

        <div className="content">
            <p>HI , I'M A FREElancer</p>
            <h1>React/Node Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimage
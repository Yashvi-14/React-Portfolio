import React from 'react';
import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css"

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.img} alt="Image"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
            <p>{props.text}</p>
        </div>
        <div className="pro-btns">
            <NavLink to={props.view} className="btn">View</NavLink>
            <NavLink to={props.source} className="btn">Source</NavLink>
        </div>
    </div>
  );
}

export default WorkCard;

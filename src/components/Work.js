import React from 'react';
import WorkCard from "./WorkCard";
import WorkCardData from './WorkCardData';

const Work = () => {
  console.log(WorkCardData); // Add this line to check the data

  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {WorkCardData.map((val, ind) => (
                <WorkCard
                    key={ind}
                    img={val.img}
                    title={val.title}
                    text={val.text} // Make sure to include text
                    view={val.view}
                />
            ))}
        </div>
    </div>
  );
}

export default Work;

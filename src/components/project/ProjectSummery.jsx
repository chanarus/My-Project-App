import React from "react";

const ProjectSummery = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text textdarken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">12th November, 11am</p>
      </div>
    </div>
  );
};

export default ProjectSummery;

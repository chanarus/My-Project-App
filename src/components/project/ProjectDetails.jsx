import React from "react";

const ProjectDetails = props => {
  const { id } = props.match.params;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            doloribus et consequatur voluptatum mollitia architecto perspiciatis
            labore incidunt ea repudiandae?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by INFINITY</div>
          <div>11th Novenber, 11am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

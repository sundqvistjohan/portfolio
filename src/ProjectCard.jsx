import React from "react";

const ProjectCard = (props) => {
  let project = props.project;
  return (
    <div className="ui card">
      <a className="image" href={project.link}>
        <img src={project.image} />
      </a>
      <div className="content" id="card-content">
        <a className="ui header" href={project.link}>
          {project.name}
        </a>
        <div className="description" id="card-description">{project.description}</div>
        <div className="description" id="card-tech"><i>{project.tech}</i></div>
      </div>
      <div className="extra content">
        <a href={project.github}>
          <i className="github icon"></i>
          <span>Github repository</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

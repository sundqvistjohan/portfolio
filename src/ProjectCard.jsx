import React from "react";

const ProjectCard = (props) => {
  let project = props.project;
  return (
    <div className="ui card" key={project.id}>
      <a
        id="image"
        href={project.link}
        style={{ backgroundImage: `url(${project.image})` }}
      ></a>
      <div className="content" id="card-content">
        <a className="ui header" href={project.link}>
          {project.name}
        </a>
        <div className="description" id="card-description">
          {project.description}
        </div>
        <div className="description" id="card-frontend">
          <i className="id card outline icon" title="Front-end" />
          <i>{project.frontend}</i>
        </div>
        <div className="description" id="card-backend">
          <i className="server icon" title="Back-end" />

          <i>{project.backend}</i>
        </div>
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

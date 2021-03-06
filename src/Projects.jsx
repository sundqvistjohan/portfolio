import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    axios.get("./src/data/projects.json").then((response) => {
      this.setState({
        projects: response.data,
      });
    });
  }

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.reverse().map((project) => {
        return <ProjectCard project={project} />;
      });
    }

    return (
      <div className="ui main container">
        <div className="ui stackable three column grid aligned" id="cards-container">
          {projectsList}
        </div>
      </div>
    );
  }
}

export default Projects;

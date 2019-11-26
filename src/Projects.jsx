import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { UndrawDesigner } from "react-undraw-illustrations"

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/projects.json')
            .then(response => {
                this.setState({
                    projects: response.data
                })
            })
    }

    render() {
        const projects = this.state.projects
        let projectsList

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id}>
                        <ProjectCard project={project} />
                    </div>
                )
            })
        }

        return (
            <div className="ui main container">
                <div className="ui stackable two column grid">
                    <div className="column">
                        <UndrawDesigner height="250px" />
                    </div>
                    <div className="column">
                        <h1 className="ui header">PROJECTS</h1>
                        <p>Information about my projects.</p>
                    </div>
                </div>
                <div className="ui stackable four column grid">
                    {projectsList}
                </div>
            </div>
        )
    }
};

export default Projects
import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (
        <div className="ui card">
            <a className="image" href={project.link}>
                <img src={project.image} />
            </a>
            <div className="content">
                <a className="ui header" href={project.link}>{project.name}</a>
                <div className="description">
                    {project.description}
                </div>
            </div>
            <div className="extra content">
                <div className="tech">
                    {project.tech}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
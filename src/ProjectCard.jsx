import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (
        <div className="ui card">
            <div className="image">
                <img src={project.image} />
            </div>
            <div className="content">
                <h3 className="ui header">{project.name}</h3>
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
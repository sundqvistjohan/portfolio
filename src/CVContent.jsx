import React from "react"

const CVContent = (props) => {
    let experience = props.experience
    console.log(experience)
    return (
        <div className="column cv">
            <i>{experience.start} - {experience.end}<br></br></i>
            <b>{experience.employer}<br></br></b>
            {experience.description}
        </div>

    )
}

export default CVContent
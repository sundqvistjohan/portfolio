import React from "react"

const CVContent = (props) => {

    if (props['experience']) {
        let content = props.experience
        console.log(content)
        return (
            <div className="column cv">
                <i>{content.start} to {content.end}<br></br></i>
                <b>{content.organization}<br></br></b>
                {content.description}
            </div>
        )
    } else {
        let content = props.education
        return (
            <div className="column cv">
                <i>{content.start} to {content.end}<br></br></i>
                <b>{content.organization}<br></br></b>
                {content.description}
            </div>
        )
    }
    
}

    


export default CVContent
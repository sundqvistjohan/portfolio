import React from "react"
import { UndrawDigitalNomad } from "react-undraw-illustrations"

const About = () => {
    return (
        <div className="ui main container">
            <div className="ui stackable two column grid">
                <div className="column">
                    <UndrawDigitalNomad />
                </div>
                <div className="column">
                    <h1 className="ui header">ABOUT</h1>
                    <p>This is text about me. Lorem ipsum etc.</p>
                </div>
            </div>
        </div>
    )
}

export default About
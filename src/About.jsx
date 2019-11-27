import React from "react"
//import { UndrawDigitalNomad } from "react-undraw-illustrations"

const About = () => {
    return (
        <div className="ui main container">
            <div id="hello" className='ui middle aligned two column grid'>
                <div className="row">
                    <div className="column">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" height="300px" width="300px" />
                    </div>
                    <div className="column">
                        <div className="about header">
                            Johan<br></br> Sundqvist
                        </div>
                        <div className="about content">
                        Web Developer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
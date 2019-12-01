import React, { Component } from "react"
import axios from "axios"
import CVContent from "./CVContent"

class CV extends Component {
    constructor() {
        super();
        this.state = {
            resume: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/cv.json')
            .then(response => {
                this.setState({
                    resume: response.data
                })
            })
    }


    render() {
        const resume = this.state.resume
        // console.log(resume)
        let experienceList
        let educationList


        if (resume.length > 0) {
            experienceList = resume[0].experience.map((experience, index) => {
                return (
                    <div class="column" key={index}>
                        <CVContent experience={experience} />
                    </div>
                )
            })
            educationList = resume[0].education.map((education, index) => {
                return (
                    <div class="column" key={index}>
                        <CVContent education={education} />
                    </div>
                )
                })


            return (
                <div className="ui main container">
                    <div id="centered" className='ui middle aligned two column grid'>
                        <div className="row">
                            <div className="column">
                                <img src="" className="cv-image" />
                            </div>
                            <div className="column">
                                <div className="cv-header">
                                    CV {resume[0].name}
                                </div>
                                <div className="cv-content">
                                    <div className="ui header">
                                        EXPERIENCE
                                    </div>
                                    <div className="ui three column grid">
                                        {experienceList}
                                    </div>
                                    <div className="ui header">
                                        EDUCATION
                                    </div>
                                    <div className="ui three column grid">
                                        {educationList}
                                    </div>
                                    <div className="ui three column grid">
                                        <div className="column">
                                            <div className="column cv">
                                            <div className="ui header">SKILLS</div>
                                                {resume[0].skills.map((item, index) => {
                                                    return (
                                                        <li key={index}>{item}</li>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="column cv">
                                            <div className="ui header">LANGUAGES</div>
                                                {resume[0].languages.map((item, index) => {
                                                    return (
                                                        <li key={index}>{item}</li>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="column cv">
                                            <div className="ui header">INTERESTS</div>
                                                {resume[0].interests.map((item, index) => {
                                                    return (
                                                        <li key={index}>{item}</li>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }


    }
}

export default CV
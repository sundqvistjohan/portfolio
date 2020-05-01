import React, { Component } from "react";
import axios from "axios";
import CVContent from "./CVContent";
import CVExtras from "./CVExtras";

class CV extends Component {
  constructor() {
    super();
    this.state = {
      resume: [],
    };
  }

  componentDidMount() {
    axios.get("./src/data/cv.json").then((response) => {
      this.setState({
        resume: response.data,
      });
    });
  }

  render() {
    const resume = this.state.resume;
    let experienceList;
    let educationList;

    if (resume.length > 0) {
      experienceList = resume[0].experience.map((experience, index) => {
        return (
          <div className="column" key={index}>
            <CVContent data={experience} />
          </div>
        );
      });
      educationList = resume[0].education.map((education, index) => {
        return (
          <div className="column" key={index}>
            <CVContent data={education} />
          </div>
        );
      });

      return (
        <div className="ui main container">
          <div className="ui stackable two column grid">
            <div className="row">
              <div className="center aligned column four wide">
                <div
                  className="cv-image"
                  style={{
                    backgroundImage: `url(${resume[0].image})`,
                    marginTop: "8rem",
                    marginBottom: "2em",
                  }}
                />
              </div>
              <div className="twelve wide column">
                <div className="ui two column grid">
                  <div className="row">
                    <div className="cv-header">{resume[0].name}</div>
                  </div>
                </div>
                <span>Web developer</span>
                <div className="cv-content">
                  <div className="column cv">{resume[0].short}</div>

                  <h3 className="ui header">EXPERIENCE</h3>
                  <div className="ui three column grid">{experienceList}</div>

                  <h3 className="ui header">EDUCATION</h3>
                  <div className="ui three column grid">{educationList}</div>

                  <CVExtras resume={resume[0]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default CV;

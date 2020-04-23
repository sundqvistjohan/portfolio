import React, { Component } from "react";
import axios from "axios";
import CVContent from "./CVContent";
import Image from "./img/IMG_1365.jpg";

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
          <div class="column" key={index}>
            <CVContent data={experience} />
          </div>
        );
      });
      educationList = resume[0].education.map((education, index) => {
        return (
          <div class="column" key={index}>
            <CVContent data={education} />
          </div>
        );
      });

      return (
        <div className="ui main container">
          <div className="ui stackable two column grid">
            <div className="row">
              <div className="center aligned column four wide">
                <img
                  src={Image}
                  className="cv-image"
                  style={{ marginTop: "8rem" }}
                />
              </div>
              <div className="twelve wide column">
                <div className="cv-header">{resume[0].name}</div>
                Web developer<p></p>
                <div className="cv-content">
                  <div className="column cv">{resume[0].short}</div>

                  <h3 className="ui header">EXPERIENCE</h3>
                  <div className="ui three column grid">{experienceList}</div>

                  <h3 className="ui header">EDUCATION</h3>
                  <div className="ui three column grid">{educationList}</div>

                  <div className="ui three column grid">
                    <div className="row">
                      <div className="column">
                        <div className="ui header">SKILLS</div>
                      </div>
                      <div className="column">
                        <div className="ui header">LANGUAGES</div>
                      </div>
                      <div className="column">
                        <div className="ui header">INTERESTS</div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="column cv">
                        {resume[0].skills.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </div>
                    </div>
                    <div className="column">
                      <div className="column cv">
                        {resume[0].languages.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </div>
                    </div>
                    <div className="column">
                      <div className="column cv">
                        {resume[0].interests.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </div>
                    </div>
                  </div>
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

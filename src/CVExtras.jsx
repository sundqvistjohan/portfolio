import React from "react";

function CVExtras(props) {
  let resume = props.resume;
  return (
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
          {resume.skills.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </div>
      <div className="column">
        <div className="column cv">
          {resume.languages.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </div>
      <div className="column">
        <div className="column cv">
          {resume.interests.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </div>
    </div>
  );
}

export default CVExtras;

import React from "react";

const Hello = () => {
  return (
    <div className="ui main container">
      <div id="centered" className="ui middle aligned grid">
        <div className="row">
          <div className="column">
            <h1 className="hello-header">Hey,</h1>
            <div className="hello-name">I'm Johan Sundqvist.</div>
            <a
              className="ui right labeled large icon basic button"
              id="hello-button"
              href="/projects"
            >
              PROJECTS
              <i className="angle double right icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;

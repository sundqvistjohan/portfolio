import React from "react";

const Contact = () => {
  return (
    <div className="ui main container">
      <div id="centered" className="ui middle aligned grid">
        <div className="column">
          <h2>JOHAN SUNDQVIST</h2>
          SUNDQ KONSULT AB<br></br>
          Karlavagnsgatan 22<br></br>
          417 53 Göteborg<br></br>
          +4673-618 90 73<br></br>
          <a href="mailto:sundqkonsult@gmail.com">sundqkonsult@gmail.com</a>
          <div className="cv-social" style={{marginTop: "20px"}}>
            <a
              href="https://github.com/sundqvistjohan/"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                padding: "10px 5px",
                margin: "10px",
              }}
            >
              <i className="inverted github big link icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sundqvistjohan/"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                padding: "10px 5px",
              }}
            >
              <i className="inverted linkedin big link icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

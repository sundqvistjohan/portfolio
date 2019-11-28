import React from "react"

const Footer = () => {
    return (
        <footer>
            <div className='ui container'>
                <div className="ui two column grid">
                    <div className="column left aligned">
                        <a className="ui github button" href="https://github.com/sundqvistjohan/">
                            <i className="github icon"></i>
                            <span className="mobile hidden">GitHub</span>
                        </a>
                        <a className="ui linkedin button" href="https://www.linkedin.com/in/sundqvistjohan/">
                            <i className="linkedin icon"></i>
                            <span className="mobile hidden">LinkedIn</span>
                        </a>
                    </div>
                    <div className="column right aligned">
                        <p>
                            Johan Sundqvist ©2019<br></br>
                            Made with React {React.version}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
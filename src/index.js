import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"
import About from "./About"
import Projects from "./Projects"
import { Switch, Route } from "react-router-dom"

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Hello}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/projects' component={Projects}></Route>
            </Switch>
            <div class ="gap"></div>
            <Footer />
        </div>
    )
};

ReactDOM.render((
    <BrowserRouter>
    <App />
    </BrowserRouter>
), document.getElementById("app"));
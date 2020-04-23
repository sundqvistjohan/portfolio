import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ui secondary menu">
      <div className="ui container">
        <Link className="ui item" id="navlink" to="/">
          PORTFOLIO
        </Link>
        <div className="right menu">
          <NavLink
            id="navlink"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/cv"
          >
            CV
          </NavLink>
          <NavLink
            id="navlink"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/projects"
          >
            PROJECTS
          </NavLink>
          <NavLink
            id="navlink"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;

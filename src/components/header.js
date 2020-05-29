import React from "react";
import { Link } from "react-router-dom";

const header = () => (
  <header className="center-align">
    <nav className="col s6 white navigation">
      <Link className="logo" to="/"></Link>
      <Link className="btn-account" to="/">
        <i className="large material-icons">account_circle</i>
      </Link>
      <div className="fixed-action-btn">
        <Link
          className="btn-favorites btn-floating btn-large waves-light"
          to="/favorites"
        >
          <i className="large material-icons">favorite</i>
        </Link>
      </div>
    </nav>
  </header>
);

export default header;

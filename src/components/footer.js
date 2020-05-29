import React from "react";

const footer = () => (
  <footer className="page-footer mt-5">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Mastercook</h5>
          <p className="grey-text text-lighten-4">
            Welcome to my recipes application.
          </p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Links</h5>
          <ul>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="https://developer.edamam.com/edamam-recipe-api"
              >
                Edama recipe API
              </a>
            </li>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="http://leclercmarin.fr/"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="https://github.com/MarinLcr"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="https://www.linkedin.com/in/marin-leclerc-ba0b3b113/"
              >
                Linkedin profil
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © 2020 Copyright Text
        <a
          className="grey-text text-lighten-4 right"
          href="http://leclercmarin.fr/"
        >
          Develop by Marin Leclerc
        </a>
      </div>
    </div>
  </footer>
);

export default footer;

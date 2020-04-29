import React from 'react';
import { Link } from "react-router-dom";

const header = () => {
    return (
        <header className="center-align">
            <nav className="col s6 white navigation">
                <Link className="logo" to="/"></Link>
            </nav>
        </header>
    );
};

export default header; 
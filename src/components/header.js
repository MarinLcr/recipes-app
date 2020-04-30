import React from 'react';
import { Link } from "react-router-dom";


const header = () => {
    return (
        <header className="center-align">
            <nav className="col s6 white navigation">
                <Link className="logo" to="/"></Link>
                <Link class="btn-account" to="/"><i class="large material-icons">account_circle</i></Link>
                <div class="fixed-action-btn">
                    <Link className="btn-favorites btn-floating btn-large waves-light" to="/favorites"><i class="large material-icons">favorite</i></Link>
                </div>
            </nav>
        </header>
    );
};

export default header;
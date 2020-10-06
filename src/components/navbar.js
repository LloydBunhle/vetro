import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(prop) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="#">The Vetro Loyalty API</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/home" className="nav-link active" >Home <span className="sr-only">(current)</span></Link>
                    <Link to="/store" className="nav-link"  replace >Stores</Link>
                    <Link to="/loyalty" className="nav-link"  replace >Loyalty</Link>

                </div>
            </div>
        </nav>
    );
}
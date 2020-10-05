import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="#">The Vetro Loyalty API</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" to="home">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link"  to="store">Stores</Link>
                    <Link className="nav-link"  to="loyalty">Loyalty</Link>
                   
                </div>
            </div>
        </nav>
    );
}
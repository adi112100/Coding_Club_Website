import React from 'react';
import '../App.css';

function Navbar(props) {

    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand nav_title" href="/">O(1)  Club</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav nav_item">
                        <a className="nav-item nav-link zoom" style={{color:"white"}} href="/">Home</a>
                        <a className="nav-item nav-link zoom" style={{color:"white"}} href="/blogs/">Blogs</a>
                        <a className="nav-item nav-link zoom" style={{color:"white"}} href="/placement/">Placement</a>
                        <a className="nav-item nav-link zoom" style={{color:"white"}} href="/contest/">Online Contest</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


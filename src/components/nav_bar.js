import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-faded">
            <ul className="nav navbar-nav">
                <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
            </ul>
            </nav>
        );
    }
}

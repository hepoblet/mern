import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/exercises" className="nav-link">Exercises List</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/exercises/create" className="nav-link">Create Exercise</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/users" className="nav-link">Users List</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/users/create" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
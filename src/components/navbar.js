import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <NavLink to="/exercises" className="nav-link" exact>Exercises List</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/exercises/create" className="nav-link" exact>Create Exercise</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/users" className="nav-link" exact>Users List</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/users/create" className="nav-link" exact>Create User</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
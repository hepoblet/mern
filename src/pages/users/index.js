import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = (props) => {
    const { _id, username } = props.user;
    const { deleteUser } = props;

    return (
        <tr>
            <td>{username}</td>
            <td>
                <Link className="btn btn-primary" to={"/users/edit/" + _id}>Edit</Link><a className="btn btn-danger" href="/users/#" onClick={() => { deleteUser(_id) }}>Delete</a>
            </td>
        </tr>
    )
}

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/users')
        .then(response => {
            if (response.data.length > 0) {
                setUsers(response.data);
            }
        })
        .catch(error => console.log(error));
    }, []);

    const usersList = () => {
        return users.map(user => {
            return (
                <User user={user} deleteUser={deleteUser} key={user._id}/>
            );
        });
    }

    const deleteUser = (id) => {
        axios.delete(process.env.REACT_APP_BASE_URL + '/users/' + id)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));

        setUsers(users.filter(user => user._id !== id));
    }

    return (
        <div>
            <h3>Users List</h3>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { usersList() }
                </tbody>
            </table>
        </div>
    );
}

export default UsersList;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
    const [username, setUsername] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/users/' + id)
        .then(response => {
            setUsername(response.data.username);
        })
        .catch(error => console.log(error));
    }, [id]);

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username,
        };

        axios.post(process.env.REACT_APP_BASE_URL + '/users/update/' + id, user)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));

        window.location = '/users';
    }

    return (
        <div>
            <h3>Edit User</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>
                        Username:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(input) => setUsername(input.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Edit"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}

export default EditUser;
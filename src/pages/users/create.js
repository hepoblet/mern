import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [username, setUsername] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username,
        };

        axios.post(process.env.REACT_APP_BASE_URL + '/users/add', user)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));

        window.location = '/users';
    }

    return (
        <div>
            <h3>Create User</h3>
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
                        value="Create"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}

export default CreateUser;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateExercise = () => {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/users')
        .then(response => {
            if (response.data.length > 0) {
                setUsers(response.data.map(user => user.username));
                setUsername(response.data[0].username);
            }
        })
        .catch(error => console.log(error));
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username,
            description,
            duration,
            date,
        };

        axios.post(process.env.REACT_APP_BASE_URL + '/exercises/add', exercise)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));

        window.location = '/exercises';
    }

    return (
        <div>
            <h3>Create Exercise</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>
                        Username:
                    </label>
                    <select
                        className="form-control"
                        value={username}
                        onChange={(select) => setUsername(select.target.value)}
                        required
                    >
                        {
                            users.map((user) => {
                                return <option
                                            key={user}
                                            value={user}
                                        >
                                            {user}
                                        </option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>
                        Description:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(input) => setDescription(input.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>
                        Duration (in minutes):
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={duration}
                        onChange={(input) => setDuration(input.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Date:
                    </label>
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
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

export default CreateExercise;
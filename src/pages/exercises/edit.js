import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditExercise = () => {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/exercises/' + id)
        .then(response => {
            setUsername(response.data.username);
            setDescription(response.data.description);
            setDuration(response.data.duration);
            setDate(new Date(response.data.date));
        })
        .catch(error => console.log(error));

        axios.get(process.env.REACT_APP_BASE_URL + '/users')
        .then(response => {
            if (response.data.length > 0) {
                setUsers(response.data.map(user => user.username));
            }
        })
        .catch(error => console.log(error));
    }, [id]);

    const onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username,
            description,
            duration,
            date,
        };

        axios.post(process.env.REACT_APP_BASE_URL + '/exercises/update/' + id, exercise)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));

        window.location = '/exercises';
    }

    return (
        <div>
            <h3>Edit Exercise</h3>
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
                        value="Edit"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}

export default EditExercise;
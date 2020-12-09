import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Exercise = (props) => {
    const { _id, username, description, duration, date } = props.exercise;
    const { deleteExercise } = props;

    return (
        <tr>
            <td>{username}</td>
            <td>{description}</td>
            <td>{duration}</td>
            <td>{date.substring(0, 10)}</td>
            <td>
                <Link className="btn btn-primary" to={"/edit/" + _id}>Edit</Link><a className="btn btn-danger" href="/#" onClick={() => { deleteExercise(_id) }}>Delete</a>
            </td>
        </tr>
    )
}

const ExercisesList = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/exercises')
        .then(response => {
            if (response.data.length > 0) {
                setExercises(response.data);
            }
        })
        .catch(error => console.log(error));
    }, []);

    const exercisesList = () => {
        return exercises.map(exercise => {
            return (
                <Exercise exercise={exercise} deleteExercise={deleteExercise} key={exercise._id}/>
            );
        });
    }

    const deleteExercise = (id) => {
        axios.delete(process.env.REACT_APP_BASE_URL + '/exercises/' + id)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));

        setExercises(exercises.filter(exercise => exercise._id !== id));
    }

    return (
        <div>
            <h3>Exercises List</h3>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { exercisesList() }
                </tbody>
            </table>
        </div>
    );
}

export default ExercisesList;
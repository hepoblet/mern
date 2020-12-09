import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';

import Home from './pages/home';
import ExercisesList from './pages/exercises';
import CreateExercise from './pages/exercises/create';
import EditExercise from './pages/exercises/edit';
import UsersList from './pages/users';
import CreateUser from './pages/users/create';
import EditUser from './pages/users/edit';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={Home}/>
        <Route path="/exercises" exact component={ExercisesList}/>
        <Route path="/exercises/create" exact component={CreateExercise}/>
        <Route path="/exercises/edit/:id" exact component={EditExercise}/>
        <Route path="/users" exact component={UsersList}/>
        <Route path="/users/create" exact component={CreateUser}/>
        <Route path="/users/edit/:id" exact component={EditUser}/>
      </div>
    </Router>
  );
}

export default App;
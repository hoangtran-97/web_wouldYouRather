import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import {Home} from './pages/Home';
import {NewQuestion} from './pages/NewQuestion';
import {LeaderBoard} from './pages/LeaderBoard';
import {Login} from './pages/Login';

function App() {
    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/add">New Question</Link>
            <Link to="/leaderboard">Leader Board</Link>
            <Link to="/login">Login</Link>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/add">
                    <NewQuestion />
                </Route>
                <Route path="/leaderboard">
                    <LeaderBoard />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

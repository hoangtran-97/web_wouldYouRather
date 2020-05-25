import React, {Component} from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import {Home} from './pages/Home';
import {NewQuestion} from './pages/NewQuestion';
import {LeaderBoard} from './pages/LeaderBoard';
import {Login} from './pages/Login';
import {handleInitialData} from './actions/shared';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
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
}

function mapStateToProps({authedUser}) {
    return {loading: authedUser === null};
}
export default connect(mapStateToProps)(App);

import React, {Component} from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import Home from './pages/Home';
import NewQuestion from './pages/NewQuestion';
import LeaderBoard from './pages/LeaderBoard';
import Login from './pages/Login';
import Poll from './components/Poll/Poll';
import {handleInitialData} from './actions/shared';
import {setAuthedUser} from './actions/authedUser';
import './css/App.css';

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(handleInitialData());
    }

    render() {
        const {loadingBar, authedUser, dispatch} = this.props;
        const logout = () => {
            dispatch(setAuthedUser(null));
        };
        return (
            <>
                <LoadingBar />
                {loadingBar.default === 0 && (
                    <>
                        <Router>
                            <div className="nav_container">
                                <Link to="/" className="nav">
                                    Home
                                </Link>
                                <Link to="/add" className="nav">
                                    New Question
                                </Link>
                                <Link to="/leaderboard" className="nav">
                                    Leader Board
                                </Link>
                                <Link to="/login" className="nav">
                                    Login
                                </Link>
                                {authedUser && (
                                    <>
                                        <div>Welcome: {authedUser}</div>
                                        <button type="button" className="nav_logout" onClick={() => logout()}>
                                            Log Out
                                        </button>
                                    </>
                                )}
                            </div>

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
                                <Route path="/questions/:id">
                                    <Poll />
                                </Route>
                            </Switch>
                        </Router>
                    </>
                )}
            </>
        );
    }
}

function mapStateToProps({loadingBar, authedUser}) {
    return {loadingBar, authedUser};
}
export default connect(mapStateToProps)(App);

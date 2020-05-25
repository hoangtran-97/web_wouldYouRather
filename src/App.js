import React, {Component} from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import {Home} from './pages/Home';
import {NewQuestion} from './pages/NewQuestion';
import {LeaderBoard} from './pages/LeaderBoard';
import Login from './pages/Login';
import {handleInitialData} from './actions/shared';
import './css/App.css';

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(handleInitialData());
    }

    render() {
        return (
            <>
                <LoadingBar />
                {this.props.loadingBar.default === 0 && (
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
                            </Switch>
                        </Router>
                    </>
                )}
            </>
        );
    }
}

function mapStateToProps({authedUser, loadingBar, users}) {
    return {loadingBar, users};
}
export default connect(mapStateToProps)(App);

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
        const {loadingBar} = this.props;
        return (
            <>
                <LoadingBar />
                {loadingBar.default === 0 && (
                    <>
                        <Router>
                            <div className="nav_container">
                                <Link to="/home" className="nav">
                                    Home
                                </Link>
                                <Link to="/add" className="nav">
                                    New Question
                                </Link>
                                <Link to="/leaderboard" className="nav">
                                    Leader Board
                                </Link>
                                <Link to="/" className="nav">
                                    Login
                                </Link>
                            </div>

                            <Switch>
                                <Route path="/home">
                                    <Home />
                                </Route>
                                <Route path="/add">
                                    <NewQuestion />
                                </Route>
                                <Route path="/leaderboard">
                                    <LeaderBoard />
                                </Route>
                                <Route path="/">
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

function mapStateToProps({loadingBar}) {
    return {loadingBar};
}
export default connect(mapStateToProps)(App);

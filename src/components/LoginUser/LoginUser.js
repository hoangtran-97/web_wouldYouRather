import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './style.css';
import {setAuthedUser} from '../../actions/authedUser';

class LoginUser extends Component {
    constructor(props) {
        super(props);
        this.state = {toHome: false};
    }

    render() {
        const {users, id, dispatch} = this.props;
        const {toHome} = this.state;
        const {avatarURL, name} = users[id];
        const login = () => {
            dispatch(setAuthedUser(id));
            this.setState(() => ({
                toHome: true
            }));
        };
        if (toHome === true) {
            return <Redirect to="/" />;
        }
        return (
            <button type="button" className="login_user_container" onClick={() => login()}>
                <p>{name}</p>
                <img src={avatarURL} alt="ava" className="login_user_ava" />
            </button>
        );
    }
}

function mapStateToProps({users}) {
    return {users};
}
export default connect(mapStateToProps)(LoginUser);

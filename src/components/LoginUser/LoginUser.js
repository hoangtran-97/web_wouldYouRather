import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.css';
import {setAuthedUser} from '../../actions/authedUser';

class LoginUser extends Component {
    componentDidMount() {}

    render() {
        const {users, id, dispatch} = this.props;
        const {avatarURL, name} = users[id];
        const login = () => {
            dispatch(setAuthedUser(id));
        };
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

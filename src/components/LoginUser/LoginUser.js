import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.css';

class LoginUser extends Component {
    componentDidMount() {}

    render() {
        const {users, id} = this.props;
        const {avatarURL, name} = users[id];
        return (
            <div className="login_user_container">
                <p>{name}</p>
                <img src={avatarURL} alt="ava" className="login_user_ava" />
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return {users};
}
export default connect(mapStateToProps)(LoginUser);

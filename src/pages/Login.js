import React, {Component} from 'react';
import {connect} from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div>{/* {this.props.users.map((user) => (
                    <div>{user.id}</div>
                ))} */}
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return {
        users
    };
}
export default connect(mapStateToProps)(Login);

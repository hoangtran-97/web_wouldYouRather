import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginUser from '../components/LoginUser/LoginUser';

class Login extends Component {
    componentDidMount() {}

    render() {
        const {userIDs} = this.props;

        return (
            <div>
                {userIDs.map((id, index) => (
                    <LoginUser key={index} id={id} />
                ))}
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return {
        userIDs: Object.keys(users)
    };
}
export default connect(mapStateToProps)(Login);

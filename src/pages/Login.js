import React, {Component} from 'react';
import {connect} from 'react-redux';

const User = ({props}) => {
    const {id} = props;
    const {name} = users[id];
    return <div>{name}</div>;
};
class Login extends Component {
    componentDidMount() {}

    render() {
        const {userIDs, users} = this.props;
        return (
            <div>
                {userIDs.map((id, index) => (
                    <User key={index} id={id} />
                ))}
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return {
        users,
        userIDs: Object.keys(users)
    };
}
export default connect(mapStateToProps)(Login);

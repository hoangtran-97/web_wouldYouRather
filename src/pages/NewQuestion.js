import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class NewQuestion extends Component {
    componentDidMount() {}

    render() {
        const {authedUser} = this.props;
        if (authedUser === null) {
            alert('You need to login first');
            return <Redirect to="/login" />;
        }
        return <div>NewQuestion</div>;
    }
}

function mapStateToProps({authedUser}) {
    return {authedUser};
}
export default connect(mapStateToProps)(NewQuestion);

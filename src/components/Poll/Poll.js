import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './style.css';

class Poll extends Component {
    componentDidMount() {}

    render() {
        const {authedUser} = this.props;

        return <div>Poll</div>;
    }
}

function mapStateToProps({authedUser}) {
    return {authedUser};
}
export default connect(mapStateToProps)(Poll);

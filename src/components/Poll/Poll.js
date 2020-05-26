import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './style.css';

class Poll extends Component {
    constructor(props) {
        super(props);
        this.state = {votedOne: false, votedTwo: false};
    }

    componentDidMount() {}

    render() {
        const {
            users, id, questions, authedUser
        } = this.props;
        if (questions[id] === undefined) {
            return <p>This Poll does not exist</p>;
        }
        const {author, optionOne, optionTwo} = questions[id];
        const {avatarURL} = users[authedUser];
        const totalVotes = optionOne.votes.length + optionTwo.votes.length;
        const onePercent = ((optionOne.votes.length / totalVotes) * 100).toFixed(0);
        const twoPercent = 100 - onePercent;
        if (optionOne.votes.includes(authedUser)) {
            console.log('voted 1');
        }
        if (optionTwo.votes.includes(authedUser)) {
            console.log('voted 2');
        }
        const {votedOne, votedTwo} = this.state;
        return (
            <div className="poll_container">
                <h1>Would you rather</h1>
                <img src={avatarURL} alt="ava" className="login_user_ava" />
                <p>Author: {author}</p>
                <div className="poll_vote_button" style={{border: votedOne && '1px solid green'}}>
                    <button type="button"> {optionOne.text}</button>
                    <div className="vote_score">{optionOne.votes.length}</div>
                    <div className="vote_percent">{onePercent}%</div>
                </div>
                <div className="poll_vote_button">
                    <button type="button"> {optionTwo.text}</button>
                    <div className="vote_score">{optionTwo.votes.length}</div>
                    <div className="vote_percent">{twoPercent}%</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({users, questions, authedUser}, props) {
    const {id} = props.match.params;
    return {
        id,
        users,
        questions,
        authedUser
    };
}
export default connect(mapStateToProps)(Poll);
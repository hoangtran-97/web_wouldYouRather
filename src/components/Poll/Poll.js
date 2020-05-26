import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {handleAnswerQuestion} from '../../actions/questions';
import './style.css';

class Poll extends Component {
    userVote = (vote) => {
        const {
            id, questions, authedUser, dispatch
        } = this.props;
        const {optionOne, optionTwo} = questions[id];
        if (optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)) {
            return alert('you already voted');
        }

        return dispatch(handleAnswerQuestion({authedUser, qid: id, answer: vote}));
    };

    render() {
        const {
            users, id, questions, authedUser
        } = this.props;

        if (questions[id] === undefined) {
            return <p>This Poll does not exist</p>;
        }
        if (authedUser === null) {
            alert('You need to login first');
            return <Redirect to="/login" />;
        }
        const {author, optionOne, optionTwo} = questions[id];
        const {avatarURL} = users[authedUser];
        const totalVotes = optionOne.votes.length + optionTwo.votes.length;
        const onePercent = ((optionOne.votes.length / totalVotes) * 100).toFixed(0);
        const twoPercent = 100 - onePercent;
        const styles = {
            hightlight1: {border: optionOne.votes.includes(authedUser) && '1px solid green'},
            hightlight2: {border: optionTwo.votes.includes(authedUser) && '1px solid green'}
        };
        return (
            <div className="poll_container">
                <h1>Would you rather</h1>
                <img src={avatarURL} alt="ava" className="login_user_ava" />
                <p>Author: {author}</p>
                <div className="poll_vote_button" style={styles.hightlight1}>
                    <button type="button" onClick={() => this.userVote('optionOne')}>
                        {optionOne.text}
                    </button>
                    <div className="vote_score">{optionOne.votes.length}</div>
                    <div className="vote_percent">{onePercent}%</div>
                </div>
                <div className="poll_vote_button" style={styles.hightlight2}>
                    <button type="button" onClick={() => this.userVote('optionTwo')}>
                        {optionTwo.text}
                    </button>
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

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Question from '../components/Question/Question';

class Home extends Component {
    componentDidMount() {}

    render() {
        const {
            authedUser, users, allQuestions, questions
        } = this.props;
        if (authedUser === null) {
            alert('You need to login first');
            return <Redirect to="/login" />;
        }
        const {answers} = users[authedUser];
        const doneQuestions = Object.keys(answers);

        return (
            <>
                {doneQuestions.map((id, index) => (
                    <Question key={index} id={id} questions={questions} />
                ))}
            </>
        );
    }
}

function mapStateToProps({authedUser, users, questions}) {
    return {
        authedUser,
        users,
        questions,
        allQuestions: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    };
}
export default connect(mapStateToProps)(Home);

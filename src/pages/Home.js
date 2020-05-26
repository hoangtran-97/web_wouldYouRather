import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Question from '../components/Question/Question';
import {findDif} from '../utils/api';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {toggle: true};
    }

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
        const answeredQuestions = Object.keys(answers);
        const unansweredQuestion = findDif(answeredQuestions, allQuestions);
        const {toggle} = this.state;
        const changeTab = () => {
            this.setState(() => ({
                toggle: !toggle
            }));
        };
        return (
            <>
                <button type="button" onClick={() => changeTab()} style={{color: !toggle && 'red'}}>
                    Answered
                </button>
                <button type="button" onClick={() => changeTab()} style={{color: toggle && 'red'}}>
                    Unanswered
                </button>
                {!toggle ? (
                    <>
                        {answeredQuestions.map((id, index) => (
                            <Question key={index} id={id} questions={questions} />
                        ))}
                    </>
                ) : (
                    <>
                        {unansweredQuestion.map((id, index) => (
                            <Question key={index} id={id} questions={questions} />
                        ))}
                    </>
                )}
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

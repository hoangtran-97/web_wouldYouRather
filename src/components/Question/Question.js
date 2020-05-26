import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Question = ({id, questions}) => {
    const {author, optionOne, optionTwo} = questions[id];

    return (
        <div className="question_container">
            <p>{author} ask would you rather:</p>
            <p>{optionOne.text}</p>
            <p>OR</p>
            <p>{optionTwo.text}</p>
            <Link type="button" to={`/questions/${id}`} className="question_link">
                Go to poll
            </Link>
        </div>
    );
};

export default Question;

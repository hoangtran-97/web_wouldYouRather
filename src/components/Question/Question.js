import React from 'react';
import './style.css';

const Question = ({id, questions}) => {
    const {author, optionOne, optionTwo} = questions[id];

    return (
        <div className="question_container">
            <p>{author} ask would you rather:</p>
            <p>{optionOne.text}</p>
            <p>OR</p>
            <p>{optionTwo.text}</p>
            <button type="button">Go to poll</button>
        </div>
    );
};

export default Question;

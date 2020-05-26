import React from 'react';

const Question = ({id, questions}) => {
    const {author, optionOne, optionTwo} = questions[id];

    return (
        <div>
            <p>{author} ask:</p>
            <p>Would you rather:</p>
        </div>
    );
};

export default Question;

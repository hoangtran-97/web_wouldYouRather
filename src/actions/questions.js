import {saveQuestionAnswer} from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTIONS = 'ANSWER_QUESTIONS';

export const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions
});
function answerQuestion({authedUser, qid, answer}) {
    return {
        type: ANSWER_QUESTIONS,
        authedUser,
        qid,
        answer
    };
}

export function handleAnswerQuestion(info) {
    return (dispatch) => {
        dispatch(answerQuestion(info));
        console.log(info);

        return saveQuestionAnswer(info).catch((e) => {
            console.warn('Error in saving poll: ', e);
            dispatch(answerQuestion(info));
            alert('The was an error voting. Try again.');
        });
    };
}

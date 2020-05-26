import {RECEIVE_USERS, SAVE_USERS_ANSWERS} from '../actions/users';

const users = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case SAVE_USERS_ANSWERS:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answers
                    }
                }
            };
        default:
            return state;
    }
};
export default users;

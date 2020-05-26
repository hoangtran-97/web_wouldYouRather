export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_USERS_ANSWERS = 'SAVE_USERS_ANSWERS';

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});
export const saveUsersAnswers = ({authedUser, qid, answer}) => ({
    type: SAVE_USERS_ANSWERS,
    authedUser,
    qid,
    answer
});

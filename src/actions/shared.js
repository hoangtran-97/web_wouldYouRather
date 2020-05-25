import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {getInitialData} from '../utils/api';
import {receiveUsers} from './users';
import {setAuthedUser} from './authedUser';

const AUTHED_ID = 'tylermcginnis';

export const handleInitialData = () => (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({users}) => {
        dispatch(receiveUsers(users));
        dispatch(hideLoading());
    });
};

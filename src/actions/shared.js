import {getInitialData} from '../utils/api';
import {receiveUsers} from './users';

import {setAuthedUser} from './authedUser';

const AUTHED_ID = 'tylermcginnis';
export const handleInitialData = () => (dispatch) => getInitialData().then(({users}) => {
    dispatch(receiveUsers(users));
    // dispatch(setAuthedUser(AUTHED_ID));
});

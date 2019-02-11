import axios from 'axios';
import {LOGIN_USER} from '../types';
import {REGISTER_USER} from '../types';

import {USER_SERVER} from '../../../components/utils/misc'

export const loginUser = (dataToSubmit) => {
    const request = axios.post(`${USER_SERVER}/login`, dataToSubmit)
                    .then(res => res.data);
    return {
        type: LOGIN_USER,
        payload: request
    }
}
export const registerUser = (dataToSubmit) => {
    const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
        .then(res => res.data);
    return {
        type: REGISTER_USER,
        payload: request
    }
}
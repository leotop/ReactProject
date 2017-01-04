import axios from 'axios';
import { browserHistory } from 'react-router'
import setAuthorizationToken from '../another/setAuthToken';
import jwt from 'jsonwebtoken';
import isEmpty from 'lodash/isEmpty';


const initialState = {
    name: '',
    username: '',
    password: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_INPUT_NAME':
            return {
                ...state, name: action.payload
            }
        case 'AUTH_PASSWORD_INPUT':
            return {
                ...state, password: action.payload
            }
        case 'LOGOUT_HANDLER':
            localStorage.removeItem('jwtToken');
            return {
                ...state
            }
        case 'AUTH_ACTIONS':
            const token = action.payload;
            if(!isEmpty(token)) {
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                browserHistory.push('/');
            }
            const decodUser = jwt.decode(token);
            return {
                ...state,
                username: decodUser.name,
                name: '',
                password: ''
            }
        default:
            return state
    }
    return state
}

import axios from 'axios';
import { browserHistory } from 'react-router'
import setAuthorizationToken from '../another/setAuthToken';
import jwt from 'jsonwebtoken';
import isEmpty from 'lodash/isEmpty';


const initialState = {
    name: '',
    password: '',
    error: ''
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
                console.log(token)
                // localStorage.setItem('jwtToken', token);
                // setAuthorizationToken(token);
                // browserHistory.push('/');
            }
            return {
                ...state,
                name: '',
                password: '',
                errors: action.payload
            }
        default:
            return state
    }
    return state
}

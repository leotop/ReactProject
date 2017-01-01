import axios from 'axios';
import { browserHistory } from 'react-router'
import setAuthorizationToken from '../another/setAuthToken';
import jwt from 'jsonwebtoken';
import isEmpty from 'lodash/isEmpty';


const initialState = {
    name: '',
    password: '',
    errors: [],
    isAuthenticated: false
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
        case 'AUTH_ACTIONS':
            // browserHistory.push('/');
            const token = action.payload
            localStorage.setItem('jwtToken', token);  
            setAuthorizationToken(token)
            const decodUser = jwt.decode(token);
            console.log(decodUser.user);
            return {
                ...state,
                isAuthenticated: isEmpty(decodUser.user),
                name: '',
                password: '',
                errors: action.payload
            }
        default:
            return state
    }
    return state
}

import axios from 'axios';
import { browserHistory } from 'react-router'

const initialState = {
    name: '',
    password: '',
    errors: [],
    isLoading: false
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

import axios from 'axios';
import { browserHistory } from 'react-router'

const initialState = {
    name: '',
    password: '',
    passwordConfirmation: '',
    email: '',
    errors: [],
    isOpen: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_NAME':
            return {
                ...state, name: action.payload
            }
        case 'PASSWORD_INPUT':
            return {
                ...state, password: action.payload
            }
        case 'PASSWORD_CONFIRMATION':
            return {
                ...state, passwordConfirmation: action.payload
            }
        case 'EMAIL_INPUT':
            return {
                ...state, email: action.payload
            }
        case 'COND_AGREE':
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case 'GO_AUTH':
            browserHistory.push('/authorization');
            return {
                ...state
            }
        case 'REG_ACTIONS':
            return {
                ...state,
                name: '',
                password: '',
                passwordConfirmation: '',
                errors: action.payload,
            }
        default:
            return state
    }
    return state
}

import axios from 'axios';


const initialState = {
    name: '',
    password: '',
    passwordConfirmation: '',
    email: '',
    errors: []
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
        case 'REG_ACTIONS':
            console.log(action.payload)
            return {
                ...state,
                name: '',
                password: '',
                passwordConfirmation: '',
                errors: action.payload
            }
        default:
            return state
    }
    return state
}

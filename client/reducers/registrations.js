import axios from 'axios';


const initialState = {
    name: '',
    password: '',
    email: '',
    array: []
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
        case 'EMAIL_INPUT':
            return {
                ...state, email: action.payload
            }
        case 'REG_ACTIONS':
            return dispatch => {
                axios.post('/regsend', {
                    name: state.name
                    password: state.password,
                    email: state.email
                })
                .then(response => {
                    dispatch({
                        type: 'REG_ACTIONS',
                        payload: text
                    });
                })
            }
            return {
                ...state, array: action.payload
            }
        default:
            return state
    }
    return state
}

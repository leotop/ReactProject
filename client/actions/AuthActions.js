import axios from 'axios';

let inputName = '';
let inputPassword = '';

export function NameInputChange(event) {
    inputName = event.target.value
    return {
        type: 'AUTH_INPUT_NAME',
        payload: event.target.value
    }
}

export function PasswordInputChange(event) {
    inputPassword = event.target.value
    return {
        type: 'AUTH_PASSWORD_INPUT',
        payload: event.target.value
    }
}

export function AuthActions(text) {
    return dispatch => {
        axios.post('/authsend', {
            name: inputName,
            password: inputPassword
        })
        .then(response => {
            dispatch({
                type: 'AUTH_ACTIONS',
                payload: response.data
            });
            inputName = '';
            inputPassword = '';
        })
        text.preventDefault();
    }
}

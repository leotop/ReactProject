import axios from 'axios';

let inputName = '';
let inputPassword = '';
let inputEmail = '';

export function NameInputChange(event) {
    inputName = event.target.value
    return {
        type: 'INPUT_NAME',
        payload: event.target.value
    }
}

export function PasswordInputChange(event) {
    inputPassword = event.target.value
    return {
        type: 'PASSWORD_INPUT',
        payload: event.target.value
    }
}

export function EmailInputChange(event) {
    inputEmail = event.target.value
    return {
        type: 'EMAIL_INPUT',
        payload: event.target.value
    }
}


export function RegActions(text) {
    return dispatch => {
        axios.post('/regsend', {
            name: inputName,
            password: inputPassword,
            email: inputEmail
        })
        .then(response => {
            dispatch({
                type: 'REG_ACTIONS',
                payload: response.data
            });
        });

    }
    return {
        type: 'REG_ACTIONS',
        payload: text
    }
}

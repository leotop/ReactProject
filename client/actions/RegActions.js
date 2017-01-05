import axios from 'axios';

let inputName = '';
let inputPassword = '';
let passwordConfirmation = '';
let inputEmail = '';

export function ConditionAgree(text) {
    return {
        type: 'COND_AGREE',
        payload: text
    }
}

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

export function PasswordConfirmationInputChange(event) {
    passwordConfirmation = event.target.value
    return {
        type: 'PASSWORD_CONFIRMATION',
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


export function goAuth(text) {
    inputEmail = event.target.value
    return {
        type: 'GO_AUTH',
        payload: text
    }
}

export function RegActions(text) {
    return dispatch => {
        axios.post('/regsend', {
            name: inputName,
            password: inputPassword,
            passwordConfirmation,
            email: inputEmail
        })
        .then(response => {
            dispatch({
                type: 'REG_ACTIONS',
                payload: response.data,
            });
            inputName = '';
            inputPassword = '';
            passwordConfirmation = '';
            inputEmail = '';
        })
        text.preventDefault();
    }
}

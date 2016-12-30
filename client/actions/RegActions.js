import axios from 'axios';

// let inputName = '';
// let inputPassword = '';
// let inputEmail = '';

export function NameInputChange(event) {
    return {
        type: 'INPUT_NAME',
        payload: event.target.value
    }
}

export function PasswordInputChange(event) {
    return {
        type: 'PASSWORD_INPUT',
        payload: event.target.value
    }
}

export function EmailInputChange(event) {
    return {
        type: 'EMAIL_INPUT',
        payload: event.target.value
    }
}


export function RegActions(text) {
    return {
        type: 'REG_ACTIONS',
        payload: text
    }
}

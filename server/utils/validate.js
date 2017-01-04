import Validator from 'validator'
import isEmpty from 'lodash/isEmpty';




export default function(data) {
    let errors = {};
    if(data.name.length < 3 || data.name.length > 20) {
        errors.name = 'Имя должно содержать от 3 до 20 символов';
    }
    if(data.password.length < 5 || data.password.length > 20) {
        errors.password = 'Пароль должно содержать от 5 до 20 символов';
    }
    if(data.email.length > 50) {
        errors.email = 'Email не может содержать более 50 символов';
    }
    if(!Validator.isAlpha(data.name)) {
        errors.name = 'Некоректное имя';
    }
    if(Validator.isNull(data.name)) {
        errors.name = 'Заполните это поле';
    }
    // if(!Validator.isEmail(data.email)) {
    //     errors.email = 'Некоректный email';
    // }
    if(Validator.isNull(data.password)) {
        errors.password = 'Заполните это поле';
    }
    if(Validator.isNull(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Заполните это поле';
    }
    if(!Validator.equals(data.password,data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Пароли не совпадают';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

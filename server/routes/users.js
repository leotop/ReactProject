import express from 'express';
import bcrypt from 'bcrypt';
import * as db from '../utils/DataBaseUtils';
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty';

const router = express.Router();

function validateInput(data) {
    let errors = {};

    if(Validator.isNull(data.name)) {
        errors.name = 'Заполните это поле';
    }
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Некоректный email';
    }
    if(Validator.isNull(data.password)) {
        errors.password = 'Заполните это поле';
    }
    if(Validator.isNull(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Заполните это поле';
    }
    if(!Validator.equals(data.password,data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Пароли не совпадают';
    }
    if(Validator.isNull(data.email)) {
        errors.email = 'Заполните это поле';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body);

    if(!isValid) {
        res.send(errors)
    }

    const { name, password, email } = req.body;
    const password_crupt = bcrypt.hashSync(password, 10)
    let newUser = new db.Users({
        name,
        password,
        email
    })
    newUser.save()
    db.Users.find()
        .then(response => {
            console.log(newUser)
        })
    res.send(req.body)
})

export default router;

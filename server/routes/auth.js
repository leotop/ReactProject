import express from 'express';
import * as db from '../utils/DataBaseUtils';
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty';
import jwt from 'jsonwebtoken';


const router = express.Router();

function validateInput(data) {
    let errors = {};

    if(Validator.isNull(data.name)) {
        errors.name = 'Заполните это поле';
    }
    if(Validator.isNull(data.password)) {
        errors.password = 'Заполните это поле';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body);
    const { name, password } = req.body;
    if(!isValid) {
        res.send(errors)
    }

    db.Users.findOne({name, password})
        .then(user => {
            const token = jwt.sign({
                id: user.get('id'),
                name: user.get('name')
            }, 'somesecretkey' )
            res.json(token)
        })
})

export default router;

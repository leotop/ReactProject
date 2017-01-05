import express from 'express';
import bcrypt from 'bcrypt';
import * as db from '../utils/DataBaseUtils';
import validateInput from '../utils/validate';
import Validator from 'validator';

const router = express.Router();

router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body);
    if(isValid) {
        const { name, password, email } = req.body;
        console.log(Validator.blacklist(password, '<>.,?#%&*^$'))
        const Bpassword = Validator.blacklist(password, '<>.,?#%&*^$');
        const Bemail = Validator.blacklist(email, '<>.,?#%&*^$');
        const password_crupt = bcrypt.hashSync(password, 10)
        let newUser = new db.Users({
            name,
            password,
            email,
            balans: 0,
            markAuto: '',
            createdAt: Date.now()
        })
        newUser.save()
        console.log(newUser);
        res.send('Вы успешно зарегистрировались')
    }   else {
        res.send(errors)
    }
})

export default router;

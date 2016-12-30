import express from 'express';
import bcrypt from 'bcrypt';
import * as db from '../utils/DataBaseUtils';

const router = express.Router();

router.post('/', (req, res) => {
    const { name, password, email } = req.body;
    const password_crupt = bcrypt.hashSync(password, 10)
    let newUser = new db.Users({
        name,
        password,
        email
    })
    console.log(req.body)
    newUser.save()

    db.Users.find()
        .then(response => {

        })
})

export default router;

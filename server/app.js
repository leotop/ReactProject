import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path'
import * as db from './utils/DataBaseUtils.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
app.set('port', (process.env.PORT || 3000));
app.use(express.static('../public'));
db.setUpconnection()


app.post('/regsend', (req, res) => {
    let newUser = new db.Users({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    })
    newUser.save()

    db.Users.find()
        .then(response => {
            res.send(response)
        })

});


app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});


app.listen(app.get('port'), () => {
    console.log(`Server is up and running on port ${PORT}`);
});

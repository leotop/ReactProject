import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path'
import mongoose from 'mongoose';
import isEmpty from 'lodash/isEmpty';
console.log(isEmpty)

mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema({
    name: String,
    password: String
})

let Users = mongoose.model('users', Schema)

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;


app.set('port', (process.env.PORT || 3000));
app.use(express.static('../public'));

app.get('/send', (req, res) => {
    let newUser = new Users({
        name: 'diman',
        password: '12345'
    })
    newUser.save(function (err, kitty, affected) {
        console.log(affected)
    })
    console.log(newUser)
});


app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
    console.log('params');
});




const server = app.listen(app.get('port'), () => {
    console.log(`Server is up and running on port ${PORT}`);
});

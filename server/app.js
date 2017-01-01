import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import * as db from './utils/DataBaseUtils';
import users from './routes/users';
import auth from './routes/auth';



const app = express();
app.use(bodyParser.json());
app.use(cors());
app.set('port', (process.env.PORT || 3000));
app.use(express.static('../public'));
app.use(helmet());
db.setUpconnection();
app.disable('x-powered-by');

app.use('/regsend', users);
app.use('/authsend', auth);

app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});


const server = app.listen(app.get('port'), () => {
    console.log(`Server is up and running on port ${process.env.PORT || 3000}`);
});

const io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world'});
    socket.on('my other event', function (data) {
        console.log(data);
    })
})


//
// function* params () {
// 	console.log('params');
// 	let opa = yield console.log('example');;
// 	console.log(opa)
// 	console.log('example');
// }
// params().next()

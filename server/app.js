import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import * as db from './utils/DataBaseUtils';
import users from './routes/users';
const log = require('debug')('server');


const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3003;
app.set('port', (process.env.PORT || 3003));
app.use(express.static('../public'));
db.setUpconnection()

app.use('/regsend', users);

app.get(/.*/, (req, res) => {
    log(req.url)
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});


const server = app.listen(app.get('port'), () => {
    console.log(`Server is up and running on port ${PORT}`);
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

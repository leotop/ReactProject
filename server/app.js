import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import helmet from 'helmet';
import * as db from './utils/DataBaseUtils';
import regusers from './routes/regusers';
import auth from './routes/auth';
import iconv from 'iconv-lite';
import service from './routes/service';
import csv from 'csvtojson';



const app = express();
app.use(bodyParser.json());
app.use(cors());
app.set('port', (process.env.PORT || 3000));
app.use(express.static('../public'));
app.use(helmet());
db.setUpconnection();
app.disable('x-powered-by');

app.use('/regsend', regusers);
app.use('/authsend', auth);
app.use('/service', service);


app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});


const server = app.listen(app.get('port'), () => {
    console.log(`Server is up and running on port ${process.env.PORT || 3000}`);
});



// const result = fs.readFileSync('convertcsv.json');

// const str = iconv.decode(new Buffer(result), 'win1251');

// console.log(str);

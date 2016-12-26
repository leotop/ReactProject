import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path'

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 80


app.set('port', (process.env.PORT || PORT));
app.use(express.static('../public'));

app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

const server = app.listen(app.get('port'), () => {
    console.log(`Server is up and running on port ${PORT}`);
});

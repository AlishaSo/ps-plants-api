const express = require('express');
const routes = require('./routes');
const db = require('./db');
const logger = require('morgan'); //tool to print raw JSON; all operations

const PORT = process.env.PORT || 3500;

const app = express();

app.use(express.json()); //makes sure the server parses the json
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));  //brings in the 'morgan' library

app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
const express = require('express');
const cors = require('cors');
const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/artists', artistRouter);
app.use('/artists', albumRouter);


module.exports = app;

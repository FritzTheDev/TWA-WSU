const express = require('express');
const getPdfs = require('./getPdfs');
const zipPdfs = require('./zipPdfs');
const fs = require('fs');
const archiver = require('archiver');
const moment = require('moment');
const ejs = require('ejs');

const app = express();
const routes = require('./routes/routes');

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/', routes);
// getPdfs.getUrls();
zipPdfs.zipPdfs();



app.listen(3000, () => {
    console.log('Server Listening on port 3000')
});
const express = require('express');
const router = express.Router();
const getPdfs = require('../getPdfs');
const zipPdfs = require('../zipPdfs');
const today = require('moment');
const fs = require('fs');

router.get('/', (req, res) => {
    res.render('homepage');
});
router.get('/getPdfs', (req, res) => {
    if (!fs.existsSync('./temp/' + today)) {
        getPdfs.getUrls();
    }
    res.redirect('/');
});
router.get('/makeZip', (req, res) => {
    zipPdfs.zipPdfs();
    console.log('test');
    res.redirect('/');
})

module.exports = router;
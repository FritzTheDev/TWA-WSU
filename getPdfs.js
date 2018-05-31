const fs = require('fs');
const request = require('request');
const moment = require('moment');

const filename = 'pdfUrls.txt';
const today = moment().format('MMM-DD-YY');

function getPdf(urlAndLabel) {
    const splitData = urlAndLabel.split(' ');
    request(splitData[0]).pipe(fs.createWriteStream('./temp/'+ today + '/' + splitData[1] +'.pdf'));
};

module.exports.getUrls = () => {
    fs.readFile(filename, 'utf8', (err, data) => {
        const lineSplit = data.toString().split('\n')
        lineSplitFix = lineSplit.map(x => x.replace(/[\n\r]+/g, ''));
        if (!fs.existsSync(`./temp/${today}`)) {
            fs.mkdirSync(`./temp/${today}`);
        }
        console.log(lineSplitFix);
        lineSplitFix.forEach((line) => {
            getPdf(line);
        });
    });
};
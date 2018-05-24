const fs = require('fs');
const request = require('request');
const moment = require('moment');

const filename = 'pdfUrls.txt';
const today = moment().format('MMM-DD-YY');

function getPdf(urlAndLabel) {
    const splitData = urlAndLabel.split(' ');
    request(splitData[0]).pipe(fs.createWriteStream('./pdfs/'+ today + '/' + splitData[1] +'.pdf'));
};

function getUrls() {
    fs.readFile(filename, 'utf8', (err, data) => {
        const lineSplit = data.toString().split('\n')
        lineSplitFix = lineSplit.map(x => x.replace(/[\n\r]+/g, ''));
        fs.mkdirSync(`./pdfs/${today}`);
        console.log(lineSplitFix);
        lineSplitFix.forEach((line) => {
            getPdf(line);
        });
    });
};
getUrls();
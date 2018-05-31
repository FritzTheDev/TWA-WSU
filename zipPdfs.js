module.exports.zipPdfs = () => {
    const fs = require('fs');
    const archiver = require('archiver');
    const moment = require('moment');

    const today = moment().format('MMM-DD-YY');
    const inputPath = './temp/' + today + '/';

    const output = fs.createWriteStream(__dirname + '/public/' + today + ' Documents.zip');
    const archive = archiver('zip', {
        zlib: { level: 9 }
    });

    output.on('close', () => {
        console.log(archive.pointer() + ' total bytes');
        console.log('Archiver has been Finalized. The output file descriptor has closed.');
    });

    archive.pipe(output);
    // fs.readdirSync( './temp/' + today)
    archive.file(inputPath + 'North-Sierra-Precip.pdf', {name: 'North-Sierra-Precip.pdf'});

    archive.finalize();
}
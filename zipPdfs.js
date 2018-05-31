module.exports.zipPdfs = () => {
    const fs = require('fs');
    const archiver = require('archiver');
    const moment = require('moment');

    const today = moment().format('MMM-DD-YY');
    const inputPath = './temp/' + today;

    const output = fs.createWriteStream(__dirname + '/public/' + 'Documents.zip');
    const archive = archiver('zip', {
        zlib: { level: 9 }
    });

    output.on('close', () => {
        console.log(archive.pointer() + ' total bytes');
        console.log('Archiver has been Finalized. The output file descriptor has closed.');
    });

    archive.pipe(output);
    archive.directory(inputPath, false)
    archive.finalize();
}
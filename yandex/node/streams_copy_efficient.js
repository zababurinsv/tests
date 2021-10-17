const stream = require('stream');
const fs = require('fs');

let fileName = process.argv[2];
let destPath = process.argv[3];

const readable = fs.createReadStream(fileName);
const writeable = fs.createWriteStream(destPath || "output");

fs.stat(fileName, (err, stats) => {
    this.fileSize = stats.size;
    this.counter = 1;
    this.fileArray = fileName.split('.');

    try {
        this.duplicate = destPath + "/" + this.fileArray[0] + '_Copy.' + this.fileArray[1];
    } catch(e) {
        console.exception('File name is invalid! please pass the proper one');
    }

    process.stdout.write(`File: ${this.duplicate} is being created:`);

    readable.on('data', (chunk) => {
        let percentageCopied = ((chunk.length * this.counter) / this.fileSize) * 100;
        process.stdout.clearLine();  // очистить текущий текст
        process.stdout.cursorTo(0);
        process.stdout.write(`${Math.round(percentageCopied)}%`);
        this.counter += 1;
    });

    readable.on('error', (e) => {
        console.log("Some error occurred: ", e);
    });

    writeable.on('finish', () => {
        process.stdout.clearLine();  // очистить текущий текст
        process.stdout.cursorTo(0);
        process.stdout.write("Successfully created the file copy!");
    });

    readable.pipe(writeable); // Включаем автопилот!

});
const readline = require('readline');
const fs = require('fs');
// const writeStream = fs.createWriteStream(__dirname + '/output.txt', { highWaterMark: 32000 })

const rl = readline.createInterface({
    input: fs.createReadStream(__dirname + '/input.txt',{ highWaterMark: 200 }),
});

let count = false
let previous = ''
rl.on('line', (line) => {
    if(count) {
        if(line !== previous) {
            writeStream.write(`${line}\n`);
            previous = line
        }
    } else {
        count = true
    }
}).on('close', () => { });
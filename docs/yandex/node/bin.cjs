const readline = require('readline');
const fs = require('fs');
const writeStream = fs.createWriteStream(__dirname + '/output.txt', { encoding: "utf8" })

const rl = readline.createInterface({
    input: fs.createReadStream(__dirname + '/input.txt'),
});

result = 0
max = 0
lines = []
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let count = lines
    for (let i = 0; i < count.length; i++) {
        if(i !== 0) {
            if( count[i] === "1") {
                result += 1
            } else {
                if (max < result) {
                    max = result
                }
                result = 0
            }
        }
    }
    writeStream.write((max > result) ? max.toString() : result.toString());
});
const { EOL } = require("os");
let readline = require('readline');
const fs = require('fs');
const writeStream = fs.createWriteStream(__dirname + '/output.txt', { encoding: "utf8" })

let rl = readline.createInterface({
    input: fs.createReadStream(__dirname + '/input.txt'),
    output: process.stdout,
    terminal: false
});

rl
.on('line', function(line) {
    let object = line
    object = object.split(' ')
    let A = object[0]
    let B = object[1]
    if(A >= (-2 * 10**9) && A <= (2 * 10**9) && B >= (-2 * 10**9) && B <= (2 * 10**9) ) {
        let sum =  parseFloat(A) + parseFloat(B)
        writeStream.write(sum.toString());
        console.log(sum);
        rl.close();
    }
})
.on('error', function(e) {
    console.log('error',e)
});
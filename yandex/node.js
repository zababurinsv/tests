let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
function processSum(number) {
    console.log(number);
}

rl.on('line', function(line) {
    let object = line
    object = object.split(' ')
    let A = object[0]
    let B = object[1]
    if(A >= (-2 * 10**9) && A <= (2 * 10**9) && B >= (-2 * 10**9) && B <= (2 * 10**9) ) {
        let sum =  parseFloat(A) + parseFloat(B)
        processSum(sum)
        rl.close();
    }
}).on('error', function(e) {

});
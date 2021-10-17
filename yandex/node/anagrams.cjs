const readline = require('readline');
const fs = require('fs');
const writeStream = fs.createWriteStream(__dirname + '/output.txt', { highWaterMark: 32000 })

const rl = readline.createInterface({
    input: fs.createReadStream(__dirname + '/input.txt',{ highWaterMark: 200 }),
});

function isEqual(object1, object2) {
    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);

    if (props1.length !== props2.length) {
        return false;
    }

    for (let i = 0; i < props1.length; i += 1) {
        const prop = props1[i];
        const bothAreObjects = typeof(object1[prop]) === 'object' && typeof(object2[prop]) === 'object';

        if ((!bothAreObjects && (object1[prop] !== object2[prop]))
            || (bothAreObjects && !isEqual(object1[prop], object2[prop]))) {
            return false;
        }
    }

    return true;
}

let dictionary = (str) => {
    let array  = str.split('')
    let obj = {}
    for(let i =0; i < array.length; i++) {
        if(array[i] in obj) {
            obj[`${array[i]}`] = obj[`${array[i]}`] + 1
        } else {
            obj[`${array[i]}`] = 1
        }
    }
    return obj
}

let dict = []
rl.on('line', (line) => {
    dict.push(dictionary(line))
}).on('close', () => {
    writeStream.write(isEqual(dict[0], dict[1]) ? "1" : "0");
});
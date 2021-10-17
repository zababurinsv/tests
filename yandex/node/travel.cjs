const { EOL } = require("os");
let readline = require('readline');
const fs = require('fs');
const writeStream = fs.createWriteStream(__dirname + '/output.txt', { encoding: "utf8" })
const rl = readline.createInterface({
    input: fs.createReadStream(__dirname + '/input.txt',{ highWaterMark: 200 }),
    terminal: false
});

let obj = {
    cities: [],
    n: 0,
    k: 0,
    travel: []
}

function getDistance(a, b) {
    const [x1, y1] = a;
    const [x2, y2] = b;
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function getWays(obj, distance) {
    const visited = new Set();
    const queue = [[obj.travel.start, 0]];
    visited.add(obj.travel.start);
    while (queue.length > 0) {
        const [currentKey, count] = queue.shift();
        if (currentKey === obj.travel.end) {
            return count;
        }
        for (let key = 0; key < obj.n; key++) {
            if (!visited.has(key) && distance(currentKey, key)) {
                queue.push([key, count + 1]);
                visited.add(key);
            }
        }
    }
    return -1
}

let lines = []
let count = 0
rl.on('line', function(line) {
    lines.push(line)
   if(count === 0) {
       obj.n = parseInt(line,10)
   } else {
       if(count <= obj.n) {
           obj.cities.push(line.split(' '))
       } else if(count === obj.n + 1){
           obj.k = parseInt(line,10)
       } else {
           let cities = line.split(' ')
           obj.travel = {
               start: parseInt(cities[0] - 1,10),
               end: parseInt(cities[1] - 1,10)
           }
       }
   }
   count++
})
.on('close', function(e) {
    if (obj.travel.start === obj.travel.end) {
        return 0;
    }
    let result = getWays(
        obj,
        (citiA, citiB) => getDistance(obj.cities[citiA],obj.cities[citiB]) <= obj.k
    )
    console.log(result)
});
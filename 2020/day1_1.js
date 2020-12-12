const lineReader = require('line-reader');

const neededNumbers1 = [];
const inputPath='./day1.txt'
// Part 1
lineReader.eachLine(inputPath, function(line) {
    const num = Number(line);
    if (neededNumbers1.includes(num)){
        const result = Math.abs(num * (num-2020) ).toString(); 
        console.log("Answer found: " + result);
        return false;
    }
    neededNumbers1.push(Math.abs(2020-num));
});
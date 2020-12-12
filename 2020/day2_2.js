const lineReader = require('line-reader');
const fs = require("fs");
const inputPath='./day2.txt'
const text = fs.readFileSync(inputPath, "utf-8");
const validLines = text
    .split("\n")
    .filter(line => {
        const dividedLine = line
            .split(":");
        const rules = dividedLine[0]    
            .split(" ");
        const password = dividedLine[1].trim();    
        const repetitions = rules[0];
        const symbol = rules[1];
        const [firstPosition, secondPosition] = repetitions.split("-").map(Number);
        const symbolSet =  new Set();
        symbolSet.add(Array.from(password)[firstPosition-1]);
        symbolSet.add(Array.from(password)[secondPosition-1]);
        if (symbolSet.size === 2 && symbolSet.has(symbol)) {
            return true;
        }
        return false;
    })
    .length;
 console.log(validLines);   
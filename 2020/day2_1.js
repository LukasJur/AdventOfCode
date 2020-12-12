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
        const [minRep, maxRep] = repetitions.split("-").map(Number);
        const occurences = Array.from(password)
            .filter(letter => letter === symbol)
            .length;
        if ( occurences >= minRep && occurences <= maxRep ) {
            return true;
        }
        return false;
    })
    .length;
 console.log(validLines);   
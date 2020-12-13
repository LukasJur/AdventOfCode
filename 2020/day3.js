const lineReader = require('line-reader');
const fs = require("fs");
const inputPath='./day3.txt'
const rowSz = 31;

const getTreeCount = (rowSize, input, xSlope, ySlope) => {
    let y = ySlope;
    let x = xSlope;
    let result = 0;
    const lines = fs.readFileSync(input, "utf-8")
        .split("\n");
    while (1) {
        const currentRow = Array.from(lines[y].trim());
        if(currentRow[x] === "#"){
            result++;
        }
        if (!lines[y+1]){
            break;
        }
        // Horizontal incrementing    
        x = (x + xSlope) % rowSize; 
        // Vertical incrementing    
        y= y + ySlope;
    }
    console.log(result);
    return result;

}

//Part 1
getTreeCount(rowSz, inputPath, 3, 1);

//Part 2
console.log(
    getTreeCount(rowSz, inputPath, 1, 1) 
    * getTreeCount(rowSz, inputPath, 3, 1) 
    * getTreeCount(rowSz, inputPath, 5, 1)
    * getTreeCount(rowSz, inputPath, 7, 1)
    * getTreeCount(rowSz, inputPath, 1, 2));


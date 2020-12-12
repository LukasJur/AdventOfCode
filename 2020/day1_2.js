const lineReader = require('line-reader');
var fs = require("fs");
const inputPath='./day1.txt'
var text = fs.readFileSync(inputPath, "utf-8");
const neededNumbers = [];
const numbers = text.split("\n").map(Number);
numbers.forEach(num => {
  neededNumbers
    .filter(neededNum => neededNum.numTwo && neededNum.sumLeft === num)
    .forEach(neededNum => {
      console.log("Answer found: ", neededNum.sumLeft * neededNum.numOne * neededNum.numTwo);
      process.exit();
    })
  neededNumbers
    .filter(neededNum => neededNum.numOne && !neededNum.numTwo)
    .forEach(neededNum => {
        const sumLeft = neededNum.sumLeft - num;
        if(sumLeft > 0){
          neededNumbers.push({sumLeft: Math.abs(neededNum.sumLeft - num), numOne: neededNum.numOne,  numTwo: num})
        }
      });
  
  if(num < 2020){
    neededNumbers.push({sumLeft: 2020-num, numOne: num }) 
  }
});
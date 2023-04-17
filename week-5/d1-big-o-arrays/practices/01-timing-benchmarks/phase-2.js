const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  res = [];
  for (let i = 1; i <= 10; i++) {
    res.push(addNums(increment * i));
  }
  return res;
} // O(n)

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  res = [];
  for (let i = 1; i <= 10; i++) {
    res.push(addManyNums(increment * i));
  }
  return res;
} // O(n^2)

module.exports = [addNums10, addManyNums10];

const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  res = [];
  for (let i = 1; i <= 100; i++) {
    startTime = Date.now();
    res.push(addNums(increment * i));
    endTime = Date.now();
    console.log(`${endTime - startTime}`);
  }
  return res;
}

function addManyNums10Timing(increment) {
  res = [];
  for (let i = 1; i <= 100; i++) {
    startTime = Date.now();
    res.push(addManyNums(increment * i));
    endTime = Date.now();
    console.log(`${endTime - startTime}`)
  }
  return res;
}

// n = 10000000;
// console.log(`addNums(${n}): `);
// console.time('addNums10')
// addNums10Timing(1000000); // O(n log n)
// console.timeEnd('addNums10')

// console.log("\n***********\n");

n = 5000;
console.log(`addManyNums(${n}): `);
console.time('addManyNums10')
addManyNums10Timing(1000); // O(n^2)
console.timeEnd('addManyNums10')

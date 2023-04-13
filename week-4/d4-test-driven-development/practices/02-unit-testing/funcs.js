function isFive(num) {
  if (num === 5) return true;
  return false;
}

function isOdd(number) {
  if (typeof number !== "number") {
    throw new Error();
  }
  if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

function myRange(min, max, step = 1) {
  let newArr = [];
  for (let i = min; i <= max; i += step){
    newArr.push(i)
  }
  return newArr;
}

// expect(actual1).to.eql(expected1);
// console.log(actual1) // .to.eql(expected1);
// console.log(actual1) // (expected1)
// console.log(myRange(min1, max1)) // [0, 1, 2, 3, 4, 5]

module.exports = { isFive, isOdd, myRange };

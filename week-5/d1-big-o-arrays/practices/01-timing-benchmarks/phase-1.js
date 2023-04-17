// Adds up positive integers from 1-n
function addNums(n) {
  total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
} // O(n)

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  total = 0;
  for (let i = 1; i <= n; i++) {
    total += addNums(i);
  }
  return total;
} // O(n^2)

module.exports = [addNums, addManyNums];

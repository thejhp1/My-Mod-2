// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length < 2) return arr;

  // Divide the array in half
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid);

  // Recursively sort the left half
  // Recursively sort the right half
  // let asd0 = mergeSort(left)
  // let asd1= mergeSort(right)
  // return merge(asd0,asd1)

  // Merge the halves together and return
  return merge(mergeSort(left), mergeSort(right));
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  const res = [];

  // While there are still values in each array...
  while(arrA.length && arrB.length){
    // Compare the first values of each array
    // Add the smaller value to the return array
    if(arrA[0] <= arrB[0]){
      res.push(arrA.shift());
    } else {
      res.push(arrB.shift());
    }
  }

  // Return the return array
  return [...res, ...arrA, ...arrB];
}

module.exports = [merge, mergeSort];

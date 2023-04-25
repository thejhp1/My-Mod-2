function quicksort(arr) {
  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length < 2) return arr;

  // Pick the last value as the pivot
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] < pivot){
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  // Recursively sort the left
  // Recursively sort the right
  // Return the left, pivot and right in sorted order
  return [...quicksort(left), pivot, ...quicksort(right)]
}


module.exports = [quicksort];

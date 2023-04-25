function linearSearch (arr, target) {

  // for (let i = 0; i < arr.length; i++){
  //   if (arr[i] === target){
  //     return i
  //   }
  // }
  // return -1

  return arr.indexOf(target)

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices

  // While high and low indices do not overlap...

    // Find the midpoint between high and low indices

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers
  let low = arr[0];
  let high = arr[arr.length - 1];
  while (low <= high) {
    const middle = low + Math.floor((high - low) / 2);
    if (target === arr[middle]){
      return middle;
    }
    if (target > arr[middle]) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1
}

module.exports = [linearSearch, binarySearch]

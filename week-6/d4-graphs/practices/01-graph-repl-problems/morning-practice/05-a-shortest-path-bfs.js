const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

function aShortestPath(start, end) {
  const queue = [[start]]; // => [[1,5], [1,2,3]]
  const visited = new Set([start]); // => [1, 2, 5, 3]

  while (queue.length) {
    const currPath = queue.shift(); // => [1,2]
    const currNode = currPath[currPath.length - 1]; // => 2
    if (currNode === end) return currPath; // if 2 === 3
    adjList[currNode].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push([...currPath, neighbor]); // => [1,2,3]
        visited.add(neighbor); // => 3
      }
    });
  }
  return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false

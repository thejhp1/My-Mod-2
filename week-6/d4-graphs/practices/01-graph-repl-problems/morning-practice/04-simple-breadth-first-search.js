const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

function breadthFirstSearch(start, end) {
  const queue = [start];
  const visited = new Set([start]);

  while (queue.length) {
    const curr = queue.shift();
    if (curr === end) return true;
    adjList[curr].forEach((neighbor) => {
      if (!visited.has(neighbor)) {S
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }
  // if (visited.has(end)) return true
  return false;
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false

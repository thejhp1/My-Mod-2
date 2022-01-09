// HINT:  Review counting islands before starting this problem!

function findNeighbors(node, matrix) {
    // Only consider N, S, E, W nodes
    const row = node[0];
    const col = node[1];
    const neighbors = [];
    // North
    if (row > 0 && matrix[row-1][col] < -5) {
        neighbors.push([row-1,col]);
    }
    // South
    if (row < matrix.length -1 && matrix[row+1][col] < -5) {
        neighbors.push([row+1,col]);
    }

    // West
    if (col > 0 && matrix[row][col-1] < -5) {
        neighbors.push([row,col-1]);
    }
    // East
    if (col < matrix[0].length -1 && matrix[row][col+1] < -5) {
        neighbors.push([row,col+1]);
    }
    // Your code here
    return neighbors;
}

function trenchTraversal(node, matrix, visited) {
    // Don't bother traversing if it is to shallow
    const row = node[0];
    const col = node[1];

    if (matrix[row][col] >= -5) return false;

    // Traverse the potential trench to count it's length
    let stack = [node];
    visited.add(`${row},${col}`);

    let trenchLength = 0;

    while (stack.length) {
        let current = stack.pop();

        trenchLength++;

        let neighbors = findNeighbors(current, matrix);

        if (neighbors.length > 2 || neighbors.length < 1) return false;

        for (let neighbor of neighbors) {
            let row = neighbor[0];
            let col = neighbor[1];
            if (!visited.has(`${row},${col}`)) {
                visited.add(`${row},${col}`);
                stack.push(neighbor)
            }
        }
        if (trenchLength >= 3) {
            return true;
        }
    }
    // Your code here
}

function identifyTrench(trenchMatrix) {
    // Start at 0,0 and attempt to traverse any unvisited nodes
    // Your code here
    let visited = new Set();
    for (let row = 0; row < trenchMatrix.length; row++) {
        for (let col = 0; col < trenchMatrix[row].length; col++) {
            if (!visited.has(`${row},${col}`)) {
                let res = trenchTraversal([row,col], trenchMatrix, visited);
                if (res) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Uncomment for local testing

// // Example 0
// const sonar_0 = [
//     [-5, -5, -5],
//     [-6, -5, -8],
//     [-5, -7, -5]
// ]

// console.log(findNeighbors([1,1], sonar_0)) => Expect [[2, 1], [1, 0], [1, 2]];

// // Example 1
// const sonar_1 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-8,-8,-9,-7],
//           [-5,-5,-5,-5,-8],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_1)) // <- Expect 'true'

// // Example 2
// const sonar_2 = [
//           [-5,-5,-5,-7,-5],
//           [-5,-8,-8,-9,-5],
//           [-5,-5,-5,-7,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_2)) // <- Expect 'false'

// // Example 3
// const sonar_3 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-5,-5,-5,-5],
//           [-5,-9,-9,-5,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_3)) // <- Expect 'false'


/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyTrench, findNeighbors, trenchTraversal];
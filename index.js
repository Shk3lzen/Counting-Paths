// Array to store all possible paths
const optArr = []

// Recursive function to count all possible paths from top left to bottom right of a grid
function countValidsPaths(x, y){
  // If we reach the first row or the first column, there is only one way to reach the target
  if(x == 0 || y == 0) return 1;

  // The total number of ways is the sum of the ways from the cell above it and the cell to its left 
  return countValidsPaths(x - 1, y) + countValidsPaths(x, y - 1);
}

// Function to print all possible paths from top left to bottom right of a grid
function printValidPaths(x, y, pathSoFar){
  
  // If we reach the first column, the only way is to move north
  if(x == 0 ){
    // Add all remaining north steps to the path
    for(let i = 0; i < y; ++i){ 
      pathSoFar += "N";
    }
    // Add this path to our array of paths
    optArr.push(pathSoFar)
    return ;
  }

  // If we reach the first row, the only way is to move east
  if(y == 0){
    // Add all remaining east steps to the path
    for(let i = 0; i < x; ++i){
      pathSoFar += "E";
    }
    // Add this path to our array of paths
    optArr.push(pathSoFar)
    return ;
  }

  // If there are steps remaining in both directions,
  // call the function again for one step to the east and one step to the north
  printValidPaths(x - 1, y, pathSoFar + "E");
  printValidPaths(x, y - 1, pathSoFar + "N");
}

// Initialization 
const x = 2;
const y = 2;

// Count valid paths
const count = countValidsPaths(x, y);

// Print the number of valid paths
console.log(`Number of valid paths: ${count}`);

// Print all valid paths (optional)
printValidPaths(x, y, "");
console.log(`Routes for each valid path (Optional): ${optArr.join(", ")}`);

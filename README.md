# Counting-Paths
The provided JavaScript code is designed to calculate all possible routes from the top-left corner to the bottom-right corner of an x by y grid, expressed as a combination of "East" (E) and "North" (N) movements.

Methodology
The code includes two primary functions:

countValidsPaths() - This recursive function computes the number of valid paths.
printValidPaths() - This recursive function prints all valid paths.
countValidsPaths()
This function computes the total number of valid paths between two points in an x by y grid. This is done by recursively adding the number of ways from the cell above it and the cell to its left in the grid.

printValidPaths()
This function prints all valid paths in an x by y grid. It does this by recursively navigating through each potential path, moving either east or north, until it reaches the first row or column.

Code Usage
The code has an initialization section that sets the dimensions of the grid (x and y) and then calls the countValidsPaths() function to obtain a count of valid paths, and the printValidPaths() function to print all valid paths.

The function countValidsPaths() returns the number of possible routes, which is then printed out to the console.

The printValidPaths() function fills an array, optArr, which contains all possible routes, and then this array is printed out to the console.

Note: A movement is represented as a string, either "E" for East or "N" for North, depending on its direction.

// Problem: Extract the middle (index 1) element from two arrays
// Approach: Directly access index 1 of both arrays and return as a new array
// Time: O(1) | Space: O(1)

function goldenMiddle(a, b) {
  return [a[1], b[1]];
}

// Test
console.log(goldenMiddle([1, 2, 3], [4, 5, 6])); // [2, 5]
console.log(goldenMiddle(["a", "b", "c"], ["x", "y", "z"])); // ['b', 'y']
console.log(goldenMiddle([10, 20, 30], [40, 50, 60])); // [20, 50]

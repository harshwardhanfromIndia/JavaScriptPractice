// Problem: Find the absolute difference between 42 and a given number
// Approach: Using built-in Math.abs() to get the absolute difference
// Time: O(1) | Space: O(1)

function difference42(n) {
  return Math.abs(42 - n);
}

// Test
console.log(difference42(10)); // 32
console.log(difference42(50)); // 8
console.log(difference42(42)); // 0

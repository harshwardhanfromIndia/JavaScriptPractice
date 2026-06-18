// Problem: Check if either number is 42 or their sum equals 42
// Approach: Simple OR conditional check on both values and their sum
// Time: O(1) | Space: O(1)

function is42(a, b) {
  if (a == 42 || b == 42 || a + b == 42) {
    return true;
  } else {
    return false;
  }
}

// Test
console.log(is42(42, 10)); // true
console.log(is42(10, 42)); // true
console.log(is42(20, 22)); // true
console.log(is42(5, 10)); // false

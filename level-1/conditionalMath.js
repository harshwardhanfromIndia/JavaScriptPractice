// Problem: Multiply two numbers if equal, otherwise add them
// Approach: Simple conditional check on equality
// Time: O(1) | Space: O(1)

function totalProduct(a, b) {
  if (a === b) {
    return a * b;
  } else {
    return a + b;
  }
}

// Test
console.log(totalProduct(5, 5)); // 25
console.log(totalProduct(3, 7)); // 10
console.log(totalProduct(0, 0)); // 0

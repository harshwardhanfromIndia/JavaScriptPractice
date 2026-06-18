// Problem: Check if the count of 4s is greater than the count of 0s in an array
// Approach: Using filter() twice to count 4s and 0s, then comparing their lengths
// Time: O(n) | Space: O(n)

function more4than0(n) {
  const fours = n.filter((num) => num === 4).length;
  const zeros = n.filter((num) => num === 0).length;
  return fours > zeros;
}

// Test
console.log(more4than0([4, 0, 4, 0, 4])); // true
console.log(more4than0([0, 0, 4])); // false
console.log(more4than0([4, 4, 4, 4])); // true
console.log(more4than0([0, 0, 0, 0])); // false

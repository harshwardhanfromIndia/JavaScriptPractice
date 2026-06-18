// Problem: Count the number of odd numbers in an array
// Approach: Using built-in filter() to extract odd numbers, then checking length
// Time: O(n) | Space: O(n)

function countOdds(numbers) {
  return numbers.filter((num) => num % 2 !== 0).length;
}

// Test
console.log(countOdds([1, 2, 3, 4, 5])); // 3
console.log(countOdds([2, 4, 6, 8])); // 0
console.log(countOdds([1, 3, 5, 7])); // 4

// Problem: Return substrings from 0 to n, each run decrementing n by 1
// Approach: Loop from n down to 1, slicing the string from 0 to i each iteration
// Time: O(n²) | Space: O(n²)

function repeater(string, n) {
  let result = "";
  for (let i = n; i > 0; i--) {
    result += string.slice(0, i);
  }
  return result;
}

// Test
console.log(repeater("JavaScript", 4)); // "JavaJavJaJ"
console.log(repeater("Harshwardhan", 5)); // "HarshHarsHarHaH"
console.log(repeater("Hi", 2)); // "HiH"

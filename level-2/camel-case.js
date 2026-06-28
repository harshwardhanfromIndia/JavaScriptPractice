// Problem: Convert a space-separated string into camelCase
// Approach: Loop through the string, lowercase the first char, and uppercase the first letter after each space
// Time: O(n) | Space: O(n)

function camelCase(n) {
  let result = n[0].toLowerCase();
  for (let i = 1; i < n.length; i++) {
    if (n[i] === " ") {
      if (n[i + 1]) {
        result += n[i + 1].toUpperCase();
        i++;
      }
    } else {
      result += n[i];
    }
  }
  return result;
}

// Test
console.log(camelCase("I love you")); // "iLoveYou"
console.log(camelCase("hello world")); // "helloWorld"
console.log(camelCase("the quick brown fox")); // "theQuickBrownFox"

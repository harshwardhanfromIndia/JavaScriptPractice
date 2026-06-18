// Problem: Replace all occurrences of 'bug' with 'flower' in a string
// Approach: Using built-in replaceAll() method
// Time: O(n) | Space: O(n)

function bugFix(string) {
  return string.replaceAll("bug", "flower");
}

// Test
console.log(bugFix("I have a bug in my code")); // "I have a flower in my code"
console.log(bugFix("bug bug bug")); // "flower flower flower"

// Problem: Extract every character at an even index from a string
// Approach: Loop through the string with step 2, picking every alternate character
// Time: O(n) | Space: O(n)

function strangeWord(word) {
  let result = "";
  for (let i = 0; i < word.length; i += 2) {
    result += word[i];
  }
  return result;
}

// Test
console.log(strangeWord("abcdef")); // "ace"
console.log(strangeWord("hello")); // "hlo"
console.log(strangeWord("javascript")); // "jsrp"

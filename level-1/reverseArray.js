// Problem: Reverse the order of elements in an array
// Approach: Using built-in reverse() method
// Time: O(n) | Space: O(1)

function reverseLetters(chars) {
  return chars.reverse();
}

// Test
console.log(reverseLetters(["a", "b", "c"])); // ['c', 'b', 'a']
console.log(reverseLetters(["h", "e", "l", "l", "o"])); // ['o', 'l', 'l', 'e', 'h']
console.log(reverseLetters(["x"])); // ['x']

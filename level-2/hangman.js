// Problem: Replace every even-indexed character in a string with an underscore
// Approach: Loop through the string and substitute even-index characters with '_'
// Time: O(n) | Space: O(n)

function hangman(hangmanString) {
  let result = '';
  for (let i = 0; i < hangmanString.length; i++) {
    if (i % 2 === 0) {
      result += '_';
    } else {
      result += hangmanString[i];
    }
  }
  return result;
}

// Test
console.log(hangman("hello"));      // "_e_l_"
console.log(hangman("javascript")); // "_a_a_c_i_t"
console.log(hangman("abcdef"));     // "_b_d_f"
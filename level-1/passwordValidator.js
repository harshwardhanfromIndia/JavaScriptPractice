// Problem: Check if passwords match and meet minimum length requirement
// Approach: Simple conditional check on equality and string length
// Time: O(1) | Space: O(1)

function checkPassword(password, password_repeat) {
  if (password == password_repeat && password.length >= 20) {
    return true;
  } else {
    return false;
  }
}

// Test
console.log(checkPassword("mypassword12345678901", "mypassword12345678901")); // true
console.log(checkPassword("short", "short")); // false
console.log(checkPassword("mypassword12345678901", "differentpassword")); // false

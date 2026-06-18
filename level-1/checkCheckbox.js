// Problem: Programmatically check a checkbox element with id 'my-checkbox'
// Approach: Using querySelector to select the checkbox and setting its checked property to true
// Time: O(1) | Space: O(1)

function checkMe() {
  document.querySelector("#my-checkbox").checked = true;
}

// Test
checkMe();

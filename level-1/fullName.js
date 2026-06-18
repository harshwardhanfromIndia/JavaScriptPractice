// Problem: Combine first and last name inputs and display the full name
// Approach: Using querySelector to read input values and template literals to combine them
// Time: O(1) | Space: O(1)

function whatIsMyName() {
  const firstName = document.querySelector("#firstname").value || "#";
  const lastName = document.querySelector("#lastname").value || "#";
  document.querySelector("#fullName").value = `${firstName} ${lastName}`;
}

// Test
whatIsMyName();

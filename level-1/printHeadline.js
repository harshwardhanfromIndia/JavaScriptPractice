// Problem: Dynamically create and display a headline on the webpage
// Approach: Using DOM manipulation to create an h1 element and append it to the body
// Time: O(1) | Space: O(1)

function printHeadline(headline) {
  const h1 = document.createElement("h1");
  h1.textContent = headline;
  document.body.appendChild(h1);
}

// Test
printHeadline("Hello World!");
printHeadline("JavaScript is awesome!");

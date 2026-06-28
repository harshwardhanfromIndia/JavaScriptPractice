// Problem: Extract the price from a string formatted as "Item ($price)"
// Approach: Using indexOf() to find brackets and slice() to extract the price
// Time: O(n) | Space: O(n)

function getPrice(item) {
  let start = item.indexOf("(");
  let end = item.indexOf(")");
  return item.slice(start + 1, end);
}

// Test
console.log(getPrice("Pizza ($7.99)")); // "$7.99"
console.log(getPrice("Diet Coke ($2.99)")); // "$2.99"
console.log(getPrice("Sushi ($9.99)")); // "$9.99"

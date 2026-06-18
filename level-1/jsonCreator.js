// Problem: Create a JSON string from a given key-value pair
// Approach: Using computed property name and JSON.stringify() to convert object to JSON string
// Time: O(1) | Space: O(1)

function firstJSON(key, value) {
  return JSON.stringify({ [key]: value });
}

// Test
console.log(firstJSON("name", "Harshwardhan")); // '{"name":"Harshwardhan"}'
console.log(firstJSON("age", 19)); // '{"age":19}'
console.log(firstJSON("isDev", true)); // '{"isDev":true}'

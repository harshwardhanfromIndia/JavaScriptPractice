// Problem: Return the longer string between an object's name and category properties
// Approach: Comparing lengths of two object properties and returning the longer one
// Time: O(1) | Space: O(1)

function theGround(obj) {
  if (obj.name.length >= obj.category.length) {
    return obj.name;
  } else {
    return obj.category;
  }
}

// Test
console.log(theGround({ name: "Harshwardhan", category: "Dev" })); // "Harshwardhan"
console.log(theGround({ name: "JS", category: "Programming" })); // "Programming"
console.log(theGround({ name: "Python", category: "Code" })); // "Python"

// Problem: Build and return a car object with predefined properties
// Approach: Directly returning an object literal with fixed properties
// Time: O(1) | Space: O(1)

function buildingACar() {
  return {
    wheels: 4,
    power: 100,
    doors: 3,
  };
}

// Test
console.log(buildingACar()); // { wheels: 4, power: 100, doors: 3 }
console.log(buildingACar().wheels); // 4
console.log(buildingACar().power); // 100

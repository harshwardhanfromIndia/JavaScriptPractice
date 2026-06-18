// Problem: Collect all numbers from 0 to 99 that are divisible by 7
// Approach: Loop through 0-99 and append multiples of 7 to a result string
// Time: O(1) | Space: O(1)

function easyLoop() {
  let result = "";
  for (let i = 0; i <= 99; i++) {
    if (i % 7 === 0) {
      result += i;
    }
  }
  return result;
}

// Test
console.log(easyLoop()); // "014212835424956637077849198"

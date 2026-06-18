// Problem: Convert an HTTP URL to HTTPS
// Approach: Using built-in replace() method to swap protocol prefix
// Time: O(n) | Space: O(n)

function http2https(url) {
  return url.replace("http:/", "https:/");
}

// Test
console.log(http2https("http://google.com")); // "https://google.com"
console.log(http2https("http://github.com")); // "https://github.com"

function firstNonRepeatingCharacter(s) {
    let charCount = new Map();

    // Count occurrences of each character
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the first non-repeating character
    for (let char of s) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    return '$'; // Return '$' if no non-repeating character is found
}

// Test case
var s = "aabbccdd";
console.log(firstNonRepeatingCharacter(s)); // Output: 'f'
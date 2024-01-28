function areAnagrams(str1, str2) {
    // Trim whitespace and convert to lowercase for case-insensitive comparison
    const cleanStr1 = str1.trim().toLowerCase();
    const cleanStr2 = str2.trim().toLowerCase();

    // Check if the sorted characters of both strings are the same
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}

// Example usage:
const result1 = areAnagrams("Astronomer", "Moon starer");
console.log(result1); // Output: true

const result2 = areAnagrams("School master", "The classroom");
console.log(result2); // Output: true

const result3 = areAnagrams("The Morse Code", "Here come dots");
console.log(result3); // Output: true

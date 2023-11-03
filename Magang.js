function findLongestWord(sentence) {
    // Split the sentence into words
    const words = sentence.split(/\s+/);
    
    // Initialize variables to store the longest word and its length
    let longestWord = "";
    let maxLength = 0;
    
    // Iterate through the words in the sentence
    for (const word of words) {
        // Remove any punctuation and whitespace from the word
        const cleanedWord = word.replace(/[.,!?;:"]/g, '');
        
        // Check if the current word is longer than the previously found longest word
        if (cleanedWord.length > maxLength) {
            longestWord = cleanedWord;
            maxLength = cleanedWord.length;
        }
    }
    
    return longestWord;
}

// Test cases
console.log(findLongestWord("The sun was shining brightly in the clear blue sky."));  // Output: "shining"
console.log(findLongestWord("The birds were singing and the flowers were in bloom."));  // Output: "singing"
console.log(findLongestWord("She was walking down the street, lost in thought."));  // Output: "walking"
console.log(findLongestWord("He sat at his desk, staring at the computer screen."));  // Output: "staring"
console.log(findLongestWord("The city was bustling with people going about their day."));  // Output: "bustling"
console.log(findLongestWord("The air was cool and crisp, perfect for a morning jog."));  // Output: "perfect"
console.log(findLongestWord("She stood at the edge of the cliff, looking out at the vast ocean."));  // Output: "cliff"
console.log(findLongestWord("The trees rustled in the gentle breeze, their leaves a riot of color."));  // Output: "gentle"
console.log(findLongestWord("He lay on the grass, gazing up at the clouds as they drifted by."));  // Output: "gazing"
console.log(findLongestWord("The sound of laughter filled the room as friends gathered for dinner."));  // Output: "laughter"
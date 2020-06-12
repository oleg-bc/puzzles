const generatePermutations = (string) => {
    // ** Base case ** - if the string is empty or 1 character, we just return that value
    if (string.length < 2) {
        return [string];
    }

    const permutationsArray = [];

    // Iterate through all the characters in the string
    for (let i = 0; i < string.length; i++) {
        // We move a character to the front and recursively find the permutations of all the characters after it
        // Note that the "front" is relative to a given permutation depth
        const frontCharacter = string[i];

        // Remove the new front character from the string
        const remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

        // Recursive call to generate an array of strings of the permutations of the remaining characters
        const remainingPermutations = generatePermutations(remainingChars);

        // Add each permutation to the result for a given depth
        for (let permutation of remainingPermutations) {
            permutationsArray.push(frontCharacter + permutation);
        }
    }

    return permutationsArray;
};
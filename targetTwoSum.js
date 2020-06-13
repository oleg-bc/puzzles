const getTargetIndexes = (array, target) => {
    const results = [];
    const arrayElementAtIndex = {};

    // Loop through our input array and
    // create a hash table that stores the array value and
    // its corresponding index.
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        arrayElementAtIndex[element] = i;
    }

    for (let i = 0; i < array.length; i++) {
        // We find the element that would be the match current value
        // and check if it is our hash table.
        const currentValue = array[i];
        const matchedValue = target - currentValue;
        const matchedIndex = arrayElementAtIndex[matchedValue];

        // Check if our matched index is a valid array index
        // ----
        // NOTE: In JavaScript, matchedIndex will be undefined
        // if it does not exist in the hash table, and
        // undefined >= 0 would evaluate to false.
        if (matchedIndex >= 0 && matchedIndex !== i) {
            results.push([i, matchedIndex]);

            // Make sure we don't use these values again
            arrayElementAtIndex[currentValue] = -1;
            arrayElementAtIndex[matchedValue] = -1;
        }
    }

    return results;
};

//BRUTEFORCE:

const bruteForceGetTargetIndexes = (array, target) => {
    const results = [];

    // Iterate through array to check each value against every other value
    for (let i = 0; i < array.length; i++) {
        // We start j at i + 1 to make sure we don't compare the same index pairs more than once
        for (let j = i + 1; j < array.length; j++) {
            // If the sum of the values equals the target, we return the pair in an array
            if (array[i] + array[j] === target) {
                results.push([i, j]);
            }
        }
    }

    return results;
};

//best single loop

const getTargetIndexes = (array, target) => {
    const results = [];
    const arrayElementAtIndex = {};

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        const matchedValue = target - currentValue;
        const matchedIndex = arrayElementAtIndex[matchedValue];

        if (matchedIndex >= 0) {
            results.push([i, matchedIndex]);

            arrayElementAtIndex[currentValue] = -1;
            arrayElementAtIndex[matchedValue] = -1;
        }

        // Add values after we see them
        arrayElementAtIndex[currentValue] = i;
    }

    return results;
};
function findRotationPoint(words) {
    const firstWord = words[0];
    let ceilingIndex = words.length - 1;
    let floorIndex = 0;
    while (floorIndex < ceilingIndex) {
        const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

        if (words[guessIndex] >= firstWord) {
            floorIndex = guessIndex
        } else {
            ceilingIndex = guessIndex;
            break;
        }

    }
    return ceilingIndex;
}

let wrds = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];
findRotationPoint(wrds);
function findSubstrings(words, parts) {
    function insertBrackets(word, part) {
        let wordA = word.split('');
        let partA = part.split('');
        let index2 = -1,
            index1 = -1;
        for (let i = 0; i < wordA.length; i++) {
            if (wordA[i] === partA[0]) { index1 = i; }
            if (wordA[i] === partA[partA.length - 1]) { index2 = i + 2; }
        }
        wordA.splice(index1, 0, '[');
        wordA.splice(index2, 0, ']');
        return wordA.join("");
    }
    parts.sort((a, b) => b.length - a.length);
    console.log(parts);
    let result = [];
    let len = words.length - 1;
    for (let e = len; e >= 0; e--) {
        for (let j = 0; j < parts.length; j++) {
            if (words[e].includes(parts[j])) {
                let a = insertBrackets(words[e], parts[j]);
                result.unshift(a);
                break;
            } else {
                if (!(result.includes(words[e])) && !(words[e].includes(parts[j]))) {
                    console.log("NO ", parts[j], " in ", words[e], "parts.length is", j);
                    result.unshift(words[e]);
                }
                break;
            }
        }
    }
    console.log(result);
    return result;
}
let words = ["Apple",
    "Melon",
    "Orange",
    "Watermelon"
];
let parts = ["a",
    "mel",
    "lon",
    "el",
    "An"
];
findSubstrings(words, parts);
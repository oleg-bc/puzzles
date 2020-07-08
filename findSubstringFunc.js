function findSubstrings(words, parts) {
    function insertBrackets(word, part) {
        if (word.includes('[') || word.includes(']')) return word;
        let wordA = word.split('');
        let partA = part.split('');
        let index2 = -1,
            index1 = -1;
        let partlen = part.length;
        let used = false;

        index1 = word.indexOf(part);
        if (partlen == 1) { index2 = word.indexOf(part) + 2; }
        index2 = word.indexOf(part) + part.length;
        console.log("index1", index1, "index2", index2, 'word', word, 'part', part);
        wordA.splice(index2, 0, ']');
        wordA.splice(index1, 0, '[');

        return wordA.join("");
    }
    parts.sort((a, b) => b.length - a.length);
    console.log('SORTED PARTS', parts);
    let result = [];
    let added = [];
    let len = words.length - 1;
    for (let e = len; e >= 0; e--) {
        console.log("current word", words[e]);
        for (let j = 0; j < parts.length; j++) {
            if (words[e].includes(parts[j])) {
                words[e] = insertBrackets(words[e], parts[j]);
            }
        }
    }

    console.log(words);
    return words;
}

let words = ["Aaaaaaaaa",
    "bcdEFGh"
]
let parts = ["aaaaa",
        "Aaaa",
        "E",
        "z",
        "Zzzzz"
    ]
    // Expected Output: ["A[aaaaa]aaa",
    //     "bcd[E]FGh"
    //]
findSubstrings(words, parts);
findSubstrings(words, parts);
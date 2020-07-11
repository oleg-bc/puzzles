class Node {
    constructor() {
        this.isEnd = false;
        this.freq = 0;
        this.children = {};
    }
}

class Trie {
    constructor() { this.root = new Node(); }

    insert(word) {
        if (word.length === 0) return;
        let letter, curNode = this.root;
        for (let i = 0; i < word.length; i++) {
            letter = word[i];
            if (!curNode.children.hasOwnProperty(letter)) {
                curNode.children[letter] = new Node();
            }
            curNode = curNode.children[letter];
        }
        curNode.isEnd = true;
        curNode.freq = curNode.freq + 1;
    }
    getNodeForPrefix(str) {
        let letter, curNode = this.root;
        for (let i = 0; i < str.length; i++) {
            letter = str[i]
            if (!curNode.children.hasOwnProperty(letter)) return null;
            curNode = curNode.children[letter];
        }
        return curNode;
    }

    isWord(word) {
        if (this.getNodeForPrefix(word) === null) return false;
        return this.getNodeForPrefix(word).isEnd;
    }

    getWordFreq(word) {
        if (this.getNodeForPrefix(word) === null) return false;
        return this.getNodeForPrefix(word).freq
    }
}

let words = ["apple", "appstore", "apple", "april", "canada", "apartment", "abalone"];

let T = new Trie();
for (let i = 0; i < words.length; i++) {
    T.insert(words[i]);
}

words = words.sort(function(a, b) { return b.length - a.length })
console.log(words);
console.log("APPLE AP", T.getNodeForPrefix('ap'), "times")

function prefixesNums(words, num) {
    let prefixList = [];
    for (let i = 0; i < words.length; i++) {
        for (let e = 0; e < words[i].length; e++) {

        }
    }
}
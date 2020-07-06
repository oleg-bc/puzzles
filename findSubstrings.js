function findSubstrings(words, parts) {
    console.log(words);
    let p = parts.sort((a, b) => b.length - a.length);

    function insertBrackets(word, part) {
        let wordA = word.split('');
        let index2 = -1,
            index1 = -1;
        for (let i = 0; i < wordA.length; i++) {
            if (wordA[i] === part[0]) { index1 = i; }
            if (wordA[i] === part[part.length - 1]) { index2 = i + 2; }
        }
        wordA.splice(index1, 0, '[');
        wordA.splice(index2, 0, ']');
        return wordA.join("");
    }

    let result = [];
    let len = words.length - 1;
    for (let i = len; i >= 0; i--) {
        for (let j = 0; j < parts.length; j++) {
            let b = parts[j];
            if (words[i].includes(b)) {
                let a = insertBrackets(words[i], parts[j]);
                result.unshift(a);
                i++;
            } else {
                result.unshift(words[i]);
            }
        }
    }

    console.log(result);
    return result;

}

let words = ["Apple", "Melon", "Orange", "Watermelon"],
    parts = ["a", "mel", "lon", "el", "An"];
findSubstrings(words, parts);
/*
function findSubstrings(words, parts) {
parts.sort((a, b) => b.length - a.length);
function insertBrackets(word,part){
    let wordA = word.split('');
    let index2=-1,index1=-1;
    for(let i=0;i<wordA.length;i++){
        if (wordA[i] === part[0]){index1=i;}
        if (wordA[i] === part[part.length-1]){index2=i+2;}
    }
    wordA.splice(index1,0,'[');
    wordA.splice(index2,0,']');
    return wordA.join("");
}

let result=[];
for(let i=0;i<words.length;i++){
    for(let j=0;j<parts.length;j++){
        if(!(result.includes(words[i])) && words[i].includes(parts[j])){
            let a = insertBrackets(words[i],parts[j]);
            result.push(a);
            
        }
    }
}

console.log(result);
return result;

}

 */
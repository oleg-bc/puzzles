function firstNotRepeatingCharacter(s) {
    if (s.length === 1) { return s[0]; }
    let countHash = {};
    for (let i = 0; i < s.length; i++) {
        countHash[s[i]] = (countHash[s[i]] || 0) + 1;
    }
    //console.log(countHash);

    for (let [key, value] of Object.entries(countHash)) {
        console.log(`${key} : ${value}`);
    }

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    if (!getKeyByValue(countHash, 1)) return "_";
    return getKeyByValue(countHash, 1);

}

let c = "abacabaabacaba";

console.log('returns', firstNotRepeatingCharacter(c));
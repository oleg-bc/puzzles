/*
Was asked by Facebook.
Given a string of round, curly, and square open and closing brackets,
return whether the brackets are balanced(well - formed).
IN: "([])[]({})" //true.
IN: "([)]"
IN: "((()" // false.
*/

var isEven = function(strIn) {

    let poCounter = 0;
    let soCounter = 0;
    let coCounter = 0;
    let pcCounter = 0;
    let scCounter = 0;
    let ccCounter = 0;

    let pOpen = false;
    let sOpen = false;
    let cOpen = false;

    for (let i = 0; i < strIn.length; i++) {
        if (strIn[i] === '(') {
            pOpen = true;
            poCounter++;
        }
        if (strIn[i] === '[') {
            sOpen = true;
            soCounter++;
        }
        if (strIn[i] === '{') {
            cOpen = true;
            coCounter++;
        }

        if (strIn[i] === ')') {
            pOpen = false;
            pcCounter++;

            if (sOpen || cOpen) { return false; }
        }
        if (strIn[i] === ']') {
            sOpen = false;
            scCounter++;
        }
        if (strIn[i] === '}') {
            cOpen = false;
            ccCounter++;
        }

        if (strIn[i] === ')' && (sOpen || cOpen)) { return false; }
    }
    //console.log('poCounter ', poCounter, 'pcCounter ', pcCounter, 'soCounter ', soCounter, 'scCounter ', scCounter);
    if (poCounter === pcCounter && soCounter === scCounter) { return true; }
    return false;
}

console.log(isEven("([])[]({})")); //true.
console.log(isEven("([)]")); // false.
console.log(isEven("((()")); // false.
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
        }
        if (strIn[i] === ']') {
            sOpen = false;
            scCounter++;
        }
        if (strIn[i] === '}') {
            cOpen = false;
            scCounter++;
        }

        if (strIn[i] === ')' && (sOpen || cOpen)) { return false; }
    }
    if (poCounter === pcCounter && soCounter === scCounter) { return true; }
    return false;
}

console.log(isEven("([])[]({})")); //true.
console.log(isEven("([)]")); // false.
console.log(isEven("((()")); // false.



/*
    let poCounter = 0;
    let soCounter = 0;
    let pcCounter = 0;
    let scCounter = 0;
    let openP = false;
    let openS = false;
    for (var i = 0; i < strIn.length; i++) {
        if (strIn[i] === '(') {
            poCounter++;
            openP = true;
        }
        if (strIn[i] === '[') {
            soCounter++;
            openS = true;
        }
        //closing
        if (i === ']') {
            scCounter++;
            openS = false;
        }
        if (strIn[i] === ')') {
            pcCounter++;
            if (openS == true) { return false; }
        }
    }
    if (poCounter === pcCounter && soCounter === scCounter) { return true; }
    return false;
*/
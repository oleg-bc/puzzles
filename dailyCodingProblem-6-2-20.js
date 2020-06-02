/*
This problem was asked by Facebook.
Given a string of round, curly, and square open and closing brackets,
return whether the brackets are balanced(well - formed).
IN: "([])[]({})" //true.
IN: "([)]"
IN: "((()" // false.
*/

var isEven = function(strIn) {
    let poCounter = 0;
    let soCounter = 0;
    let pcCounter = 0;
    let scCounter = 0;
    let openP = false;
    let openS = false;
    for (var i = 0; i < strIn.length; i++) {
        if (i === '(') {
            poCounter++;
            openP = true;
        }
        if (i === '[') {
            soCounter++;
            openS = true;
        }


        //closing
        if (i === ')') {
            pcCounter++;
            if (openS == true) { return false; }
        }
        if (i === ']') { scCounter++; }
    }
    if (poCounter === pcCounter && soCounter === scCounter) { return true; }
    return false;
}

console.log(isEven("([])[]({})")); //true.
console.log(isEven("([)]")); // false.
console.log(isEven("((()")); // false.
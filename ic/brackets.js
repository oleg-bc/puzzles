/*
You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
Let's say:
'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."
Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

Examples:
"{ [ ] ( ) }" should return true
"{ [ ( ] ) }" should return false
"{ [ }" should return false
*/

function isValid(code) {

    openersClosersObject = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    openers = ['(', '{', '['];
    closers = [')', '}', ']'];
    openersStack = [];

    for (let i = 0; i < code.length; i++) {
        const current = code[i];

        if (openersStack.length < 1 && closers.includes(current)) { return false; }
        if (openers.includes(current)) { openersStack.push(current); }

        if (closers.includes(current)) {
            const poppedOpener = openersStack.pop();
            if (openersClosersObject[poppedOpener] !== current) { return false }
        }
    }
    return openersStack.length === 0;
}













// Tests

let desc = 'valid short code';
assertEqual(isValid('()'), true, desc);

desc = 'valid longer code';
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);

desc = 'mismatched opener and closer';
assertEqual(isValid('([][]}'), false, desc);

desc = 'missing closer';
assertEqual(isValid('[[]()'), false, desc);

desc = 'extra closer';
assertEqual(isValid('[[]]())'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}
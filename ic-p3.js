/*  const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];
reverseWords(message);
console.log(message.join(''));
// Prints: 'steal pound cake'*/

//my solution

/*

function reverseWords(message) {
    let str;
    for (let i = message.length - 1; i > -1; i--) {
        str = message[i] + str;
        if (message[i] == 0 || message[i] === ' ') {
            console.log(str);
            str = '';
        }
    }
    console.log(str);
}

const mess = ['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l'
];

reverseWords(mess);

*/


///the courses solution

//first reverse all the letters

//then reverse (again) the letters of just the words

/*  const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];
reverseWords(message);
console.log(message.join(''));
// Prints: 'steal pound cake'*/
function reverseWords(message) {
    let leftInd = 0;
    let rightInd = message.length - 1;

    function reverseLetters(array, leftInd, rightInd) {
        //for (let i = leftInd, e = rightInd - 1; i < rightInd / 2; i++, e--) {
        while (leftInd < rightInd) {
            let temp;
            temp = array[leftInd];
            array[leftInd] = array[rightInd];
            array[rightInd] = temp;
            leftInd++;
            rightInd--;
        }
        return array;
    }
    let currentWordStartIndex = 0;
    for (let i = 0; i <= message.length; i++) {
        if (message[i] == ' ' || i === message.length) {
            reverseLetters(message, currentWordStartIndex, i - 1);
            currentWordStartIndex = i + 1;
        }
    }
    return message;
}


const mess = ['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l'
];


console.log(reverseWords(mess));
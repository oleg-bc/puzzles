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
    function reverseLetters(array, leftInd, rightInd) {
        //for (let i = leftInd, e = rightInd - 1; i < rightInd / 2; i++, e--) {
        leftInd = 0;
        rightInd = message.length - 1;
        while (leftInd < rightInd) {
            const temp = array[leftInd];
            array[leftInd] = array[rightInd];
            array[rightInd] = temp;
            leftInd++;
            rightInd--;
        }
        return array;
    }

    let array1 = reverseLetters(message);
    console.log('array1 is ', array1)
    let currentWordStartIndex = 0;
    for (let i = 0; i <= array1.length; i++) {
        if (i === array1.length || array1[i] === ' ') {

            reverseLetters(array1, currentWordStartIndex, i - 1);
            currentWordStartIndex = i + 1;
        }
    }
    return array1;
}


const mess = ['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l'
];


console.log(reverseWords(mess));
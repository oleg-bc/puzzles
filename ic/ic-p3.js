/*  const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];
reverseWords(message);
console.log(message.join(''));
// Prints: 'steal pound cake'*/
function reverseWords(message) {
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
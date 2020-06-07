Legionaries
In the range 1 - 13(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13) the digit 1
occurs 6 times.

In the range, 1 - 2, 660(half the number of Romans in a legion), expressed in
    Roman numerals, how many times does the numeral“ X” occur ?


    const romanMatrix = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

function convertToRoman(num) {
    if (num === 0) {
        return '';
    }
    for (let i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
        }
    }
}

let i = 0;
let roman = []

while (i <= 2660) {
    roman.push(convertToRoman(i));
    i++;
}

console.log(roman);

let sum = roman.reduce(function(accumulator, currentValue) {
    let xes = (currentValue.match(/X/g) || []).length
    return accumulator + xes
}, 0)


console.log(sum);

///MOREPUZZLES:

/* 
I'll make it $100 if you can solve these in the next 45 minutes (javascript):

Palindromes A palindrome is a word, number, phrase, or another sequence of characters which reads the same backward as forward, such as madam, racecar, or the number

What is the sum of all numeric palindromes that are less than 10,000?

Your Solution

==================

Fibonacci The Fibonacci sequence begins like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 (each number is the sum of the previous two)

What is the sum of all odd numbers in the Fibonacci sequence that are less than 10,000?

Your Solution

==================

Epigram on Failure Given the following quote by Alan Perlis

“Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You’ve solved the wrong problem. Work hard to improve.”

Considering only the alphabetical characters, consonants having the value of their ASCII codes, and vowels having the inverse value of their ASCII codes, what is the sum of the sentence?

Example: Taking the word “iffy”, the ASCII code of “i” is 105, it’s inverse is -105. The ASCII value of ‘f’ is 102. The ASCII y of “y” is 121. The sum of “iffy” = 220

Your Solution   
*/
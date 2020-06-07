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
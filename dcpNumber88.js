/*was asked by ContextLogic.

Implement division of two 
positive integers without 
using the division, 
multiplication, or modulus operators.
Return the quotient as an integer, ignoring the remainder.*/

function div(intArg, divisor) {

    if (intArg < divisor) { return 0 }
    let counter = 0;
    while (intArg >= divisor) {
        if (intArg < divisor) { return counter }
        intArg = intArg - divisor;
        counter = counter + 1;
    }

    return counter;
}

console.log(div(9, 3));
console.log(div(16, 4));
console.log(div(16, 5));
console.log(div(16, 1444));
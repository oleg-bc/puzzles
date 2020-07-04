function dec2bin(dec) {
    //return(dec >>> 0).toString(2);
    console.log("bin", dec.toString(2))
    return dec.toString(2);
}

function findProfession(level, pos) {
    if (level == 1 && pos == 1) return "Engineer";
    //let X = 2^(level-1)+pos-1;
    let X = pos - 1;

    let bin = dec2bin(X);
    let strBin = bin.toString();
    let arrBin = strBin.split("");

    function countOnes(arrBin) {
        let count = 0;
        for (let i = 0; i < arrBin.length; i++) {
            if (arrBin[i] == "1") { count++; }
        }
        return count;
    }
    let co = countOnes(arrBin);
    //Y=countOnes%2;
    let Y;
    if (pos > 700) { Y = (co) % 2; } else {
        Y = (co) % 2;
        console.log("Y!!!!!!!!!", Y)
    }
    //let Y = (X-1)%2;
    console.log("co ", co, " X is ", X, "  Y  ", Y, " LEVEL  ", level, "   POS  ", pos);


    if (Y == 0) {; return "Engineer"; } else { return "Doctor"; }


}



/*
//console.log("X   ", X,"  Y  ",Y);    


if (level ===1)return 'Engineer';
if (level===2 && pos===1)return 'Engineer';
else return 'Doctor';
if( (pos%2) === 1){
    return findProfession(level-1, (pos+1)/2);}
    /*else{
        if(findProfession(level-1, pos/2)=='Doctor'){
            return 'Engineer';
            }
            else{return 'Doctor';}
    } */

/*
Consider a special family of Engineers and Doctors. This family has the following rules:

Everybody has two children.
The first child of an Engineer is an Engineer and the second child is a Doctor.
The first child of a Doctor is a Doctor and the second child is an Engineer.
All generations of Doctors and Engineers start with an Engineer.
We can represent the situation using this diagram:

                E
           /         \
          E           D
        /   \        /  \
       E     D      D    E
      / \   / \    / \   / \
     E   D D   E  D   E E   D
Given the level and position of a person in the ancestor tree above, find the profession of the person.
Note: in this tree first child is considered as left child, second - as right.

Example

For level = 3 and pos = 3, the output should be
findProfession(level, pos) = "Doctor".

Input/Output

[execution time limit] 4 seconds (js)

[input] integer level

The level of a person in the ancestor tree, 1-based.

Guaranteed constraints:
1 ≤ level ≤ 30.

[input] integer pos

The position of a person in the given level of ancestor tree, 1-based, counting from left to right.

Guaranteed constraints:
1 ≤ pos ≤ 2(level - 1).

[output] string

Return Engineer or Doctor.

SOLUTION EXPLANATION: --------------
https://en.wikipedia.org/wiki/Thue%E2%80%93Morse_sequence
This type of sequence is known as the Thue-Morse sequence. 

p is the 0-indexed position
b is the binary representation of p
c is the number of 1's in b

https://askvoprosy.com/voprosy/discussion-about-how-to-retrieve-an-i-th-element-in-the-j-th-level-of-a-binary-tree-algorithm
Let's number the nodes of the tree in the following way:

1) the root has number 1
2) the first child of node x has number 2*x
3) the second child of node x has number 2*x+1

Now, notice that each time you go to the first child, the profession stays 
the same, and you add a 0 to the binary representation of the node. And each 
time you go to the second child, the profession flips and you add a 1 to the binary representation.
Example: Let's find the profession of the 4th node in the 4th level (last 
level in the diagram you have in the question). First we start at the root with number 1, 
then we go to the first child with number 2 (10 binary). After that we go to the second 
child of 2 which is 5 (101 binary). Finally, we go to the second child of 5 which is 11 (1011 binary).
Notice that we started with only one bit equal to 1, then every 1 bit we added to the binary 
representation flipped the profession. So the number of times we flip a profession is equal 
to the (number of bits equal to 1) - 1. The parity of this amount decides the profession.

This leads us to the following solution:

X = number of bits equal to 1 in [ 2^(level-1) + pos - 1 ]

Y = (X-1) mod 2
if Y is 0 then the answer is "Engineer" Otherwise the answer is "Doctor"
since 2^(level-1) is a power of 2, it has exactly one bit equal to 1, therefore you can write:
X = number of bits equal to 1 in [ pos-1 ]
Y = X mod 2

Which is equal to the solution you mentioned in the question.


*/
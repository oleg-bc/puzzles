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

*/
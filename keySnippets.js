//dups in arr
function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}

var arin = [2, 4, 6, 5, 4];

//dups in arr with some()
function hasDuplicates(arr) {
    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));
}

//str to arr
var str = "Bla bla Bla";
var res = str.split(" ");

//store in hash print hash

var hash = {};
Object.yourProperty = value;
Object["yourProperty"] = value;

var point = { x: 3, y: 2 };
point["x"]; //returns 3
point.y // returns 2

//print
for (var key in Object.keys(dict)) {
    var value = dict[key];
}

//and
for (let [key, value] of Object.entries(hash)) {
    console.log(`${key}:${value}`)
}

//get a key of obj by val
///////////////////////////////???DOESTHIS NEED}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value;);
    if (!getKeyByValue(hash, 1)) return "_";
    return getKeyByValue(hash, 1);
}


//counter hash
let countHash = {};
countHash[string[i]] = (countHash[string[i]] || 0) + 1;


//make int from arr of digits:

function toIint(inpt) {
    let result = 0;
    for (let i = 0; i < inpt.length; i++) {
        result = (result + inpt[i] % 10) * 10;

    }
    return result / 10;
}


//remove element from middle of arr by value

var colors = ["red", "blue", "car", "green"];
var carIndex = colors.indexOf("car");
colors.splice(carIndex, 1);


// split string into an array
//  output =H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?
var str = "How are you doing today?";

var res = str.split("");


//convert numbers to string or even binary:

var myNumber = 120;
var myString = myNumber.toString(); //converts number to string "120"
var num = 213;
console.log("Output : " + num.toString()); // convert to integer string        
console.log("Output : " + num.toString(2)); // convert to binary string
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
dec2bin(1); // 1
dec2bin(-1); // 11111111111111111111111111111111
dec2bin(256); // 100000000
dec2bin(-256); // 11111111111111111111111100000000
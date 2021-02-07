/*
The shuffle must be "uniform," meaning each item in 
the original array must have the same probability of 
ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) 
for getting a random integer that is >= floor and <= ceiling. 
*/


function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
    let len = array.length;

    function isHigh(len) {
        let ran = getRandom(0, len);
        //if (ran < len / 2) { return true; } else { return false };
        return ran;
    }

    for (let i = 0; i < len - 1; i++) {
        let ran = isHigh(len - 1);
        if (isHigh(len)) {
            let temp = array[i];
            array[i] = array[ran];
            array[ran] = temp;
            g
        }
    }
    return array;
}



let sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);
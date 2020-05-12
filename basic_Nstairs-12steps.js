//leetcode steps

function stepsFunc(totSteps){ //possible steps are 1 and 2
    result = 0;
    if (totSteps == 0 || totSteps == 1){return 1;};
    if (totSteps <= 0 ) { return 0; }

    result = stepsFunc(totSteps-1)+stepsFunc(totSteps-2)
    return result;
}

console.log("result is   ",stepsFunc(6));

// IN 4 OUT 5
// IN 2 OUT 2
// IN 1 OUT 1
// IN 6 OUT 13
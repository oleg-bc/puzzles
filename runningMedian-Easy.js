/*Was asked by Microsoft.
Compute the running median of a sequence of numbers. 
Given a stream of numbers, print out the median of the list so far on each new element.
The median of an even-numbered list is the average of the two middle numbers.
For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:
2
1.5
2
3.5
2
2
2

const arr = ['a', 'b', 'd'];
let start = 2;
let deleteCount = 0;
arr.splice(start, deleteCount, 'c');
arr; // ['a', 'b', 'c', 'd'];
*/

function doTheMedean(arg) {

    if (arg.length < 2) { return arg[0]; }
    if (arg.length == 2) {
        return (arg[0] + arg[1]) / 2;
    }
    if (arg.length > 2) {
        let mid = (arg.length) / 2;
        //console.log("arg.length is now:    ", arg.length, "  and mid is   ", mid)
        if (arg.length % 2 === 0) {
            return (arg[mid - 1] + arg[mid + 1]) / 2;
        } else {
            let odd = Math.ceil(mid);
            return arg[odd];
        }
    }
}

function runningSort(arrArg) {
    arrArg = arrArg.sort((x, y) => x - y);
    return arrArg;
}

function runningMedian(args) {
    let newArr = [args[0]];
    console.log(args[0]);
    for (let i = 1; i < args.length; i++) {
        newArr.push(args[i]);
        //console.log("args[i] is ", args[i], "  and newArr is  ", newArr)
        newArrS = runningSort(newArr);
        let medean = doTheMedean(newArrS);
        console.log(medean);
    }
}

runningMedian([2, 1, 5, 7, 2, 0, 5]);
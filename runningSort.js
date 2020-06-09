//function sort2.sort((x, y) => x - y);


function runningSort(arrArg) {

    arrArg = arrArg.sort((x, y) => x - y);
    return arrArg;
}

function runSort(arrArg) {
    let newArr = [];
    newArr.push(arrArg[0]);
    for (let i = 1; i < arrArg.length; i++) {
        newArr.push(arrArg[i]);
        newArrS = runningSort(newArr);
        console.log(newArrS);
    }

}

runSort([2, 1, 5, 7, 2, 0, 5]);
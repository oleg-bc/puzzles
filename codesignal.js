//temporary saved work

function firstDuplicate(a) {
    let b = a;
    var dupIndexes = [];
    let dupind;
    for (let i = 0; i < a.length; i++) {
        let temp = a[i];
        a[i] = NaN;
        if (a.includes(temp)) {
            //return temp;
            dupind = a.indexOf(temp)
            dupIndexes.push(dupind);
            //a[i]=temp;
        } else { i++ }
    }
    if (!dupIndexes) { return -1; } else {
        let smallestDupInd = Math.min(...dupIndexes);

        return b[smallestDupInd];
    }
}
function firstDuplicate(a) {
    let c = [];
    let dupIndexes = [];
    let noDups = true;
    for (let i = 0; i < a.length; i++) {
        let temp = a[i];
        c.push(temp);
        a[i] = NaN;
        if (a.includes(temp)) {
            noDups = false;
            //let dupInd = a.indexOf(temp);
            //dupIndexes.push(dupInd);
            dupIndexes.push(a.indexOf(temp));
        }
    }
    if (noDups) { return -1; }
    let position = Math.min(...dupIndexes);
    return c[position];
}

let b = [2, 1, 3, 5, 3, 2];
firstDuplicate(b);
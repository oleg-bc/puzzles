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
            let dupInd = a.indexOf(temp);
            dupIndexes.push(dupInd);
        }
    }
    let position = Math.min(...dupIndexes);
    if (noDups) { return -1; }
    return c[position];

}
function coverDebts(s, debts, interests) {
    let nd = [];
    let ni = [];
    let bud = s * .1;
    let total = 0;
    let zeros = (rate => rate < 1); ///interests.every(zeros)

    function accrueInterest(debts, interests) {
        for (let i = 0; i < debts.length; i++) {
            if (interests[i] > 0) {
                debts[i] = debts[i] * (interests[i] * .1);
            }
        }
    }
    for (let i = 0; i < interests.length; i++) {
        if (interests.every(zeros)) { console.log("ALL ZEROS"); } else {
            let maxIntVal = Math.max(...interests);
            let mii = interests.indexOf(maxIntVal);
            ni.push(maxIntVal)
            nd.push(debts[mii])
            interests[mii] = 0;
        }
    }
    console.log("NI", ni, "ND", nd);

    function recursive(ni, nd, bud, total) {

    }

    console.log("RETURNING TOTAL", total)
    return total;
}

let s = 50,
    debts = [2, 2, 5],
    interests = [200, 100, 150];

coverDebts(s, debts, interests);
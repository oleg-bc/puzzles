function coverDebts(s, debts, interests) {
    console.log(s, debts, interests);
    let bud = s * .1;
    let total = 0;
    let maxIntVal, mii;

    function getSmallest() {
        let maxIntVal = Math.max(...interests);
        if (maxIntVal == 0) { return null; }
        let mii = interests.indexOf(maxIntVal);
    }

    function accrueInterest(debts, interests) {
        for (let i = 0; i < debts.length; i++) {
            if (interests[i] !== 0) {
                debts[i] = debts[i] * (interests[i] * .1);
            }
        }
    }

    function process(bud, debts, interests) {
        let paid = debts[mii] - bud;
        let remainder = bud - debts[mii];
        ///
        if (paid == 0 || paid < 0) {
            debts[mii] = 0;
            interests[mii] = 0;
        }
        if (paid == 0) {
            total = total + bud;
            accrueInterest(debts, interests);
            process(bud, debts, interests)

        }
        if (paid < 0) {
            total = total + debts[mii];
            bud = bud - debts[mii]
            process(bud, debts, interests)
        }
        if (paid > 0) {
            accrueInterest(debts, interests);
            debts[mii] = debts[mii] - bud;

            process(bud, debts, interests)
        }
    }
    process(bud, debts, interests)
    if (getSmallest()) {
        process(bud, debts, interests);
    }



    console.log("TOTAL IS   ", total, "DEbTS:  ", debts, "  INTERESTS:  ", interests);
    return total;
}


let s = 50,
    debts = [2, 2, 5],
    interests = [200, 100, 150];
coverDebts(s, debts, interests);
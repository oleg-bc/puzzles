function coverDebts(s, debts, interests) {
    console.log(s, debts, interests);
    let bud = s * .1;
    let total = 0;
    let maxIntVal, mii;

    function accrueInterest(debts, interests) {

        for (let i = 0; i < debts.length; i++) {
            if (interests[i] !== 0) {
                debts[i] = debts[i] * (interests[i] * .1);
            }
        }
    }

    function getLargest(interests, mii) {
        if (interests.length < 1) { return }
        interests = interests.filter(int => int > 0);
        let maxIntVal = Math.max(...interests);
        if (maxIntVal == 0) { return null; }
        return maxIntVal;
    }

    function process(bud, debts, interests) {
        ///if zero just zero out
        if (interests.length < 1) { return; }
        maxIntVal = getLargest(interests, mii);
        //if (!maxIntval) { return total; }
        mii = interests.indexOf(maxIntVal);
        let paid = bud - debts[mii]; ////budget-debt
        if (paid == 0) {
            bud = 0;
            debts[mii] = 0;
            interests[mii] = -1;
        }
        ///if positive zero out
        if (paid > 0) {
            bud = paid;
            debts[mii] = 0;
            interests[mii] = -1;
            process(bud, debts, interests);
        }
        ///if negative MORE DEBT REMAINS RERURN
        if (paid < 0) {
            debts[mii] = debts[mii] - bud;
            bud = 0;
        }
        accrueInterest(debts, interests);
        process(bud, debts, interests);
    }

    process(bud, debts, interests)
    console.log("MAXINTVAL", maxIntVal, "MII", mii);
    return total;
}


let s = 50,
    debts = [2, 2, 5],
    interests = [200, 100, 150];
coverDebts(s, debts, interests);

/*

    function accrueInterest(debts, interests) {

        for (let i = 0; i < debts.length; i++) {
            if (interests[i] !== 0) {
                debts[i] = debts[i] * (interests[i] * .1);
            }
        }
    }

    function process(bud, debts, interests) {
        if (!getSmallest()) { return }

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
*/
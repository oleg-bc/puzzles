function coverDebts(s, debts, interests) {
    console.log(s, debts, interests);
    let bud = s * .1;
    let total = 0;
    let zeros = (rate => rate < 1); ///interests.every(zeros)

    function accrueInterest(debts, interests) {
        for (let i = 0; i < debts.length; i++) {
            if (interests[i] !== 0) {
                debts[i] = debts[i] * (interests[i] * .1);
            }
        }
    }

    function process(bud, debts, interests) {

        let maxIntVal = Math.max(...interests);
        if (maxIntVal == 0) { return; }
        let mii = interests.indexOf(maxIntVal);
        let paid = debts[mii] - bud;
        let remainder = bud - debts[mii];
        ///
        if (paid == 0) {
            debts[mii] = 0;
            total = total + bud;
            interests[mii] = 0;
            accrueInterest(debts, interests);
        }
        if (paid > 0) { /// DEBT-BUDGET -> {6-1=5} still leftover DEBT
            debts[mii] = paid;
            total = total + (bud);
            accrueInterest(debts, interests);
        }
        if (paid < 0) { ///DEBT-BUDGET {1-5=-4} - still has BUDGET 
            interests[mii] = 0;
            total = total + (debts[mii]);
            debts[mii] = 0;
            let nbud = bud - debts[mii];
            process(nbud, debts, interests);

        }

        //let zeros = (rate => rate < 1);
        let maxIntVal2 = Math.max(...interests);
        if (maxIntVal2 == 0) {
            process(bud, debts, interests);
        }
    }

    process(bud, debts, interests);



    if (interests.every(zeros)) {
        console.log("RETURNING", total)
        return total;
    } else process(bud, debts, interests);
    console.log("TOTAL IS   ", total, "DEbTS:  ", debts, "  INTERESTS:  ", interests);

}
let s = 50,
    debts = [2, 2, 5],
    interests = [200, 100, 150];
coverDebts(s, debts, interests);
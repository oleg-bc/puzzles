function coverDebts(s, debts, interests) {
    console.log("FIRST", s, debts, interests);
    let bud = s * .1;

    let total = 0;

    function accrueInterest(debts, interests) {
        for (let i = 0; i < debts.length; i++) {
            debts[i] = debts[i] * (interests[i] * .1);
        }
    }

    function pay(bud, debts, interests) {
        let maxIntVal = Math.max(...interests);
        let mii = interests.indexOf(maxIntVal);
        let paid = debts[mii] - bud;
        if (paid == 0) {
            debts[mii] = 0;
            total = total + bud;
            interests = interests.splice(interests[mii], 1);
            //debts = debts.splice(debts[mii], 1);
        }
        if (paid > 0) {
            debts[mii] = paid;
            total = total + bud;
            pay(bud, debts, interests);
        }
        if (paid < 0) {
            debts[mii] = 0;
            total = total + (bud - debts[mii]);
            interests = interests.splice(interests[mii], 1);
            //debts = debts.splice(debts[mii], 1);
        }
        accrueInterest(debts, interests);
        if (interests.lenght > 1) { pay(bud, debts, interests) }

    }

    if (interests.length > 1) { pay(bud, debts, interests); }
    console.log("LAST TOTALL", total, "interests", interests, "debts", debts);
    return total;
}

let s = 50,
    debts = [2, 2, 5],
    interests = [200, 100, 150];
coverDebts(s, debts, interests);
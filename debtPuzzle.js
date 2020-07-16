function coverDebts(s, debts, interests) {
    console.log(s, debts, interests);
    let bud = s * .1;
    let maxIntVal = Math.max(...interests);
    console.log("MAXINTVAL", maxIntVal)
    let mii = interests.indexOf(maxIntVal);
    let total = 0;

    function accrueInterest(debts, interests) {
        for (let i = 0; i < debts.length; i++) {
            debts[i] = debts[i] * interests[i] * .1;
        }
    }

    function pay(bud, debts, interests) {
        // if interests length is less than one return the total
        //if (interests.length < 1) { return total; }
        let paid = debts[mii] - bud;
        // do if 0
        if (paid == 0) {
            interests = interests.splice(interests[mii], 1);
            console.log("interests after splice", interests);
            accrueInterest(debts, interests);
            total = total + bud;
            if (interests.length > 1) { pay(bud, debts, interests); }
        }
        // cut the interest from the array
        // do if positive
        if (paid > 0) {
            bud = bud - debts[mii];
            debts[mii] = debts[mii] - bud;
            interests = interests.splice(interests[mii], 1);
            accrueInterest(debts, interests);
        }

        // increment all the debts by their interests
        // do if negative

        if (paid < 0) {
            bud = Math.abs(paid);
            total = total + debts[mii];
            debts[mii] = 0;
            interests = interests.splice(interests[mii], 1);
            if (interests.length < 1) { return total; } else {
                accrueInterest(debts, interests);
            }
        }
        //base case
        //if (interests.length < 1) { return total; }

    }
    if (interests.length > 1) { pay(bud, debts, interests) }
    console.log("TOTAL", total);
    return total;
}

let s = 50,
    debts = [2, 2, 5],
    interests = [200, 100, 150];
coverDebts(s, debts, interests);
/*
s: 50
debts: [2, 2, 5]
interests: [200, 100, 150]
    
*/

/*    
    
let total = 0;
let budget = s*.1;
    let hash = {};
    
    if(interests.lengt<1)return total;
    function accrueInterest(debts,interests){
        for(let i=0;i<debts.length;i++){
            debts[i] = debts[i]*interests[i]*.1;
        }
    }
    
   
    
    function helper(budget,debts,interests){
    for(let i =0; i<debts.length;i++)
    {hash[interests[i]]==hash[debts[i]];}
    let sortedInts = interests.sort((a,b) => a-b)
    let largestInt = interests.indexOf(sortedInts[sortedInts.length-1]);
    console.log("LARGEST INT IS",largestInt)
    
    if(debts[largestInt]==budget){debts[largestInt]=debts[largestInt]-budget;
    interests[largestInt]==0;
    console.log("INTERESTSBEFORE::: ",interests)
    interests = interests.splice(interests[largestInt],0)
    console.log("INTERSTSAFTER:::",interests)
    total=total+budget;
    accrueInterest(debts,interests);
    }
    
    else if (debts[largestInt]>budget){debts[largestInt]=debts[largestInt]-budget;
    //debts[largestInt]=debts[largestInt]+(interests[largestInt]*.1);
    total=total+budget;
    accrueInterest(debts,interests);
    }
    else if (debts[largestInt]<budget){
        debts[largestInt]=0;
        interests[largestInt]=0;
        budget = budget-debts[largestInt];
        accrueInterest(debts,interests);
        total=total+budget;
        
        helper(budget,debts,interests);
    }}
     helper(budget,debts,interests)
    return total;
    */



/*2222222222
        
        function payLargest(largestInt){
        for(let i =0; i<debts.length;i++)
        console.log("LARGEST INT IS",largestInt)
        
        if(debts[largestInt]==budget){debts[largestInt]=debts[largestInt]-budget;
        //interests[largestInt]==0;
        console.log("INTERESTSBEFORE::: ",interests)
        interests = interests.splice(interests[largestInt],0)
        console.log("INTERSTSAFTER:::",interests)
        total=total+budget;
        }
        
        else if (debts[largestInt]>budget){debts[largestInt]=debts[largestInt]-budget;
        //debts[largestInt]=debts[largestInt]+(interests[largestInt]*.1);
        total=total+budget;
        }
        else if (debts[largestInt]<budget){
            debts[largestInt]=0;
            interests[largestInt]=0;
            budget = budget-debts[largestInt];
            total=total+budget;
            
        }
        return total;
    
    }
    
    if(interests.length<1){return total;}
    total = total+payLargest(largestInt);
    return total;
        
        
        */


/*
        let total = 0;
    let budget = s*.1;
    let sortedInts = interests.sort((a,b) => a-b);
    let largestInt = interests.indexOf(sortedInts[sortedInts.length-1]);
    ///pay down the largest debt 
    // take budget debts return total
    function payBiggest(budget,debts){
    if(debts[largestInt]==budget){debts[largestInt]=debts[largestInt]-budget;
        console.log("INTERESTSBEFORE::: ",interests)
        interests = interests.splice(interests[largestInt],0)
        console.log("INTERSTSAFTER:::",interests)
        total=total+budget;
        return total;
        }
        
        else if (debts[largestInt]>budget){
        debts[largestInt]=debts[largestInt]-budget;
        //debts[largestInt]=debts[largestInt]+(interests[largestInt]*.1);
        total=total+budget;
        }
        else if (debts[largestInt]<budget){
            debts[largestInt]=0;
            interests[largestInt]=0;
            budget = budget-debts[largestInt];
            total=total+budget;
            
        }}
    
    function accrueInt(debts,interests){}
    
    
    
        */

//33333
/*
    if (interests.length < 1) {
        console.log("HI");
        return;
    }
    let total = 0;
    let budget = s * .1;
    let rbudget;

    function accrueInterest(debts, interests) {
        for (let i = 0; i < debts.length; i++) {
            debts[i] = debts[i] * interests[i] * .1;
        }
    }

    function iterate(total, budget, debts, interests) {
        if (interests.length < 1) return total;
        let sortedInts = interests.sort((a, b) => a - b);
        let largestInt = interests.indexOf(sortedInts[sortedInts.length - 1]);
        ///
        if (debts[largestInt] == budget) {
            debts[largestInt] = debts[largestInt] - budget;
            interests = interests.splice(interests[largestInt], 0)
            total = total + budget;
            budget = 0;
            accrueInterest(debts, interests);
            return total;
        } else if (debts[largestInt] > budget) {
            debts[largestInt] = debts[largestInt] - budget;
            total = total + budget;
            accrueInterest(debts, interests);
            return total;
        } else if (debts[largestInt] < budget) {
            debts[largestInt] = 0;
            interests[largestInt] = 0;
            rbudget = budget - debts[largestInt];
            total = total + budget;
            interests = interests.splice(interests[largestInt], 0)
            iterate(total, rbudget, debts, interests);
        }
        if (interests.length < 1) { return total; } else { iterate(debts, interests); }

    }
    ///
    total = coverDebts(s, debts, interests);
    return total;
    console.log(total);
    return total;

*/
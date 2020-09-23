/*
Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

We'll represent each customer order as a unique integer.

As an example,

  Take Out Orders: [1, 3, 5]
 Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 4, 6, 5, 3]
would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,

  Take Out Orders: [17, 8, 24]
 Dine In Orders: [12, 19, 2]
  Served Orders: [17, 8, 12, 19, 24, 2]
would be first-come, first-served.

Note: Order numbers are arbitrary. They do not have to be in increasing order.
*/

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    // Check if we're serving orders first-come, first-served
    
    // for (let i=0;i<servedOrders.length;i++){
    //     if(servedOrders[i]==takeOutOrders[i] || servedOrders[i]==dineInOrders[i]){
    //         if(servedOrders[i]==takeOutOrders[i]){servedOrders.unshift()}
    //     }else{
    //         takeOutOrders.unshift()
    //     }
    //     return false;
    // }
    if(servedOrders.length===0){return true;}
    if(dineInOrders.length && dineInOrders[0]==servedOrders[0]){
        dineInOrders.shift();
        servedOrders.shift();
        return isFirstComeFirstServed(takeOutOrders,dineInOrders,servedOrders);
    }
    
    if(takeOutOrders.length && takeOutOrders[0]==servedOrders[0]){
        takeOutOrders.shift();
        servedOrders.shift();
        return isFirstComeFirstServed(takeOutOrders,dineInOrders,servedOrders);
    }else{
    return false;}
  }

  
  let to = [1, 3, 5], dos=[2, 4, 6], so = [1, 2, 4, 6, 5, 3]
  //let to = [17, 8, 24], dos= [12, 19, 2], so=[17, 8, 12, 19, 24, 2]

  console.log(isFirstComeFirstServed(to,dos,so));
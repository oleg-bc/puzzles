//leetcode backtracking

let partition = function(s){

    let res = [], plds = [];
    helper(s,0,plds,res);
        return res;
    }

    let helper = (s,start, plds,res) => {if(start == s.length){
        res.push(plds.concat());}
        for (let i=start; i<s.length; i++){
            if (isPalindrome(s.substring(start,i+1))){
                plds.push(s.substring(start,i+1))
                helper(s,i+1,plds,res);
                plds.pop
            }
        }
    }

    let isPalindrome = (s) => {
        let l=0, r=s.length-1;
        while(r>l){
            if(s[l] !== s[r]){return false;}
            l++; r--;
        }
        return true;
    }

console.log(partition('aab'));
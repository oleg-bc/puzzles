/*  This was asked by Amazon.
Implement a stack that has the following methods:

push(val), which pushes an element onto the stack

pop(), which pops off and returns the topmost element of the stack.
If there are no elements in the stack, then it should
throw an error or  return null.

max(), which returns the maximum value in the stack currently.If there are no elements in the stack, then it should
throw an error or  return null.
Each method should run in constant time.
*/

Class Stack {
    constructor(arr) {
        this.arr = arr;
    };

    function pop(val) {
        if (arr.length > 0) {
            var ret = arr.shift();
            return ret;
        } else { return null; }
    };

    function push(val) {
        arr.unshift(val);
    };

    function max(val) {
        if (arr.length > 0) {
            return null;
        } else {
            var ret = arr.length;
            return ret;
        }
    };

}
/*For example:

  { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

JavaScript
Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

For example, given:

  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

JavaScript
your function would return:

  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]*/

function mergeRange(arr) {
    //donuts.forEach(({ type, cost }) => console.log(`Donut ${index} : ${type} donuts cost $${cost} each`));
    let output = [];
    let arrStart = [];
    let arrEnd = [];
    for (let i = 0; i < arr.length; i++) {
        arrStart.push(arr[i].startTime);
        arrEnd.push(arr[i].endTime)
    }

    arrStart.sort(function(a, b) { return a - b });
    console.log('arrStart', arrStart, 'arrEnd', arrEnd);

    let fallsBetween = -1;

    for (let i = 0; i < arrStart.length; i++) {
        if (arrEnd[i] == arrStart[i + 1]) {


            let currObj = { startTime: arrStart[i] };
            currObj.endTime = arrEnd[i + 1];
            output.push(currObj);
            //i = i + 2;
            break;
        }
        if (arrStart[i + 1] > arrStart[i] && arrStart[i + 1] < arrEnd[i]) {
            currObj = { startTime: arrStart[i] }
            if (arrEnd[i + 1] > arrEnd[i]) { currObj.endTime = arrEnd[i + 1] } else {
                currObj.endTime = arrEnd[i];
            }

            output.push(currObj);
            i++;
        } else {
            currObj = { startTime: arrStart[i], endTime: arrEnd[i] };
            output.push(currObj);
        }
        if (arrStart[i + 1] > arrStart[i] && arrEnd[i + 1] <= arrEnd[i]) { break; }

    }
    for (let i = 0; i < output.length; i++) {
        console.log(output[i]);

    }
}


var inp1 = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
];
var inp2 = [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }];
var inp3 = [
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 },
];

mergeRange(inp1);
mergeRange(inp2);
mergeRange(inp3);
function mergeRanges(meetings) {

    // Create a deep copy of the meetings array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));

    console.log('meetings is:       *****', meetings);
    console.log('meetingsCopy is:   *****', meetingsCopy);
    // Sort by start time
    const sortedMeetings = meetingsCopy.sort((a, b) => {
        return a.startTime - b.startTime;
    });

    // Initialize mergedMeetings with the earliest meeting
    const mergedMeetings = [sortedMeetings[0]];

    for (let i = 1; i < sortedMeetings.length; i++) {
        const currentMeeting = sortedMeetings[i];
        const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

        // If the current meeting overlaps with the last merged meeting, use the
        // later end time of the two
        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
        } else {

            // Add the current meeting since it doesn't overlap
            mergedMeetings.push(currentMeeting);
        }
    }

    return mergedMeetings;
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

console.log(mergeRanges(inp1));
console.log(mergeRanges(inp2));
console.log(mergeRanges(inp3));
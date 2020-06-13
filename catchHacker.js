/*https://skilled.dev/course/catch-the-hacker

You don’t like studying for coding interviews alone, so before you go to bed you post a signup form online where people can add their email if they want to practice interview questions together. When you wake up, you realize that other people dread studying for interviews as much as you, and A LOT of devs have signed up.

However, some prankster thought it would be funny to mess up your list, and they duplicated every email address multiple times. But this person made a mistake - the algorithm they used to duplicate emails actually created more copies of their email address in the list than anyone else. To get this hacker back, you want to find their email address in the list... using a computationally efficient algorithm! 💪 🙌

Write a function findHackerEmail that will return the email address of the hacker.

// Input
const emails = ['a@gmail.com', 'trey@skilled.dev', 'b@yahoo.com', 'trey@skilled.dev'];

// Output: findHackerEmail(emails);
'trey@skilled.dev'*/

const bruteForceFindEmail = emails => {
    let maxCount = 0;
    let email = '';

    // Nest for loops - immediately think O(n^2)
    for (let i = 0; i < emails.length; i++) {
        const currentEmail = emails[i];
        let currentCount = 0;

        for (let j = 0; j < emails.length; j++) {
            if (emails[j] === currentEmail) {
                currentCount++;
            }
        }

        const isNewMax = currentCount > maxCount;
        maxCount = isNewMax ? currentCount : maxCount;
        email = isNewMax ? currentEmail : email;
    }

    return email;
};
const findHackerEmail = emails => {
    const emailCountTable = {};
    let maxCount = 0;
    let hackerEmail = '';

    // Create a hash table that tracks the count of each email
    // This is an O(n) operation
    for (const email of emails) {
        // If we haven't seen the email yet, add it to the table
        if (!emailCountTable[email]) {
            emailCountTable[email] = 0;
        }

        // Increment the count for the email
        emailCountTable[email]++;
    }

    // Iterate the object to find the email that appears the most
    // This is an O(n) operation
    for (const email in emailCountTable) {
        const count = emailCountTable[email];

        if (count > maxCount) {
            maxCount = count;
            hackerEmail = email;
        }
    }

    return hackerEmail;
};
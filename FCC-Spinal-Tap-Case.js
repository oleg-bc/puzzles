function spinalCase(str) {

    // Replace low-upper case to low-space-uppercase
    var str1 = str.replace(/([a-z])([A-Z])/g, "$1 $2"); /// stuck on this solution- replaces lower-followed-by-cap with space
    str1 = str1.replace(/\s+|[_]/g, "-"); // replaces spaces and or udnerscores with DASH
    str1 = str1.toLowerCase();
    console.log(str1);
    return str1;
}

spinalCase('This Is Spinal Tap');
// Pseudocode and testcases
//1. This Is Spinal Tap
//>>>> MAKE THIS LAST STEP - convert to lower
// if space or underscore convert to dash
// if underscore convert to dash
// if lower followed by upper - convert insert dash

//spinalCase('This Is Spinal Tap');

/*
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things" 
*/
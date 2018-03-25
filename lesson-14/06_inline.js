/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
} emotions("happy", function (i) {
    laugh = "";
    for (x = 0; x < i; x++) {
        laugh += "ha";
    }
    return laugh + "!";
});

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num >= 1) {
    num2 =  num - 1;
    if (num != 1 && num >= 3) {
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + num2 + " bottles of juice on the wall!");
    } else if (num === 2) {
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + num2 + " bottle of juice on the wall!");
    } else {
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + num2 + " bottles of juice on the wall!");
    }
    
    num-- ;
}

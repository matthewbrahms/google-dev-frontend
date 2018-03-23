/*
 * Programming Quiz: JuliaJames (4-1)
 * note: this is fizzbuzz
 */

var x = 1;

while (x <= 20) {
    
    if (x % 15 === 0) {
        console.log("JuliaJames");
    } else if (x % 5 === 0) {
        console.log("James");
    } else if (x % 3 === 0) {
        console.log("Julia");
    } else {
        console.log(x);
    }
    
    x++;
}

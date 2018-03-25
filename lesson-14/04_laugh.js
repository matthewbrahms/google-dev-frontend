/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(number) {
    answer = "";
    for (i = 0; i < number; i++) {
        answer += "ha";
    }
    return answer + "!";
};

console.log(laugh(10));

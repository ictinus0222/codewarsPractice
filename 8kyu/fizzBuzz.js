/* Create a function that takes in a number. 
Console log all values from 1 to that number, 
but if the number is divisible by 3 log "fizz" instead of that number, 
if the number is divisible by 5 log "buzz" instead of the number, 
and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number. 
*/

// My Answer

function fizzBuzz(num){
    for (let i = 0; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log("fizzBuzz");
        } else if (i % 5 == 0) {
            console.log("buzz");
        } else if(i % 3 == 0 ||) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
    
}

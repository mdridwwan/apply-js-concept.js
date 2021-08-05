/* function getFactorial(numbers) {
    let factorial = 1;
    let i = 1;
    while (i <= numbers) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
const myFactorial = getFactorial(7);
console.log(myFactorial);

function getFactorialodd(number) {
    factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
const oddMyFactorial = getFactorialodd(7);
console.log(oddMyFactorial);
*/
function getFactorial(number) {
    factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    };
    return factorial;
}
const myFactorial = getFactorial(7);
console.log(myFactorial);
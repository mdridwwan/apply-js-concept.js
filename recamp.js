var time = '4:00 pm';
var tPrice = 156;
var colorWhite = false;

//array
var partners = ['loto', 'koto', 'sajid', 'rohan']
var elementCount = partners.length;
var sajidIndex = partners.indexOf('sajid');
partners[1] = 'kiki';
console.log(sajidIndex);

// condirionals
if (tPrice < 120) {
    console.log('mmh book ta deo taholy');
} else {
    console.log('mmh den na kicu discount...!plx...')
}

// loop
//while loop
var i = 0;
while (i <= 12) {
    //c
    i++;
}
// for loop
for (var i = 0; i < 10; i++) {

}

// function
// function isMoonUp(time) {
//     if (time >= 19 && time <= 5) {
//         return;
//     }
//     return false;
// }
// var monStatus = isMoonUp(21);
// console.log(isMoonUp);

function milesToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}
var manathon = milesToKilometer(2);
console.log(manathon);

function grToKg(total) {
    var Kg = total / 1000;
    return Kg;
}
var totalKg = grToKg(200000);
console.log('Total KG:',
    totalKg);

function timeDay(hours) {
    var Day = hours / 24;
    return Day;
}
var totalday = timeDay(72);
console.log(totalday);


function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const number = 200;
const numbersEven = isEven(number);
console.log("Even Numbers Result", numbersEven);

function oddNumbers(number) {
    if (number % 2 == 1) {
        return true;
    }
    return false;
}
const oddAllNumbers = oddNumbers(number);
console.log("Odd Numbers Result", oddAllNumbers);



function incheFeet(numbers) {
    var feet = numbers / 12;
    return feet;
}
const addFeet = incheFeet(36);
console.log(addFeet);
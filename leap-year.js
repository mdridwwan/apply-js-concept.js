 function isLeapYear(leapYear) {
     if (leapYear % 4 == 0 && leapYear % 100 != 0 || leapYear % 400 == 0) {
         return true;
     } else {
         return false;
     }
 };

 const myYear = 2100;
 const myLeapYear = isLeapYear(myYear);
 console.log('Is my year leep year', myLeapYear)
var a = isNaN("11");
var b = isNaN(2 - 10);

console.log(a);
// isNaN() is a function in JavaScript that checks whether a value is "Not a Number".  It tries to convert the given value to a number.
// "11" is a string.  JavaScript can successfully convert the string "11" into the number 11.
// Result: Since "11" can be converted to a number, isNaN("11") returns false (because "11" is a number, not not a number).

console.log(b);
// 2 - 10: This expression is evaluated first, resulting in -8.
// isNaN(-8): The isNaN() function checks if a value is "Not a Number".  -8 is a valid number.
// Result: Since -8 is a number, isNaN(-8) returns false.  Therefore, b is assigned the boolean value false.

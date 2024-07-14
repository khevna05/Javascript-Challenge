// Day 2 : Operators

// Tasks/Activities:

// Activity 1 : Arithmetic Operators

let a = 5;
let b = 8;

// Task 1 : Write a program to add two numbers and log the result to the console.
console.log(a + b);

// Task 2 : Write a program to subtract two numbers and log the result to the console.
console.log(a - b);

// Task 3 : Write a program to multiply two numbers and log the result to the console.
console.log(a * b);

// Task 4 : Write a program to divide two numbers and log the result to the console.
console.log(a / b);

// Task 5 : Write a program to find the remainder when one number is divided by another and log the result to the console.
console.log(a % b);

// Activity 2 : Assignment Operator
let c = 7;
let d = 8;

// Task 6 : Use the += Operator to add a number to a variable and log the result to the console.
let res = (c += d);
console.log(res);

// Task 7 : Use the -= Operator to subtract a number from a variable and log the result to the console.
let res1 = (c -= d);
console.log(res1);

// Activity 3 : Comparison Operator
let p = 12;
let q = 8;

// Task 8 : Write a program to comapare two numbers using > and < and log the result to the console.
console.log(p > q);
console.log(p < q);

// Task 9 : Write a program to comapre two numbers using >= and <= and log the result to the console.
console.log(p >= q);
console.log(p <= q);

// Task 10 : Write a program to comapre two numbers using == and === and log the result to the crossOriginIsolated.
console.log(p == q);
console.log(p === q);

// Activity 4 : Logical Operator
let x = 6;
let y = 10;

// Task 11 : Write a program that uses the && operator to combine two condition and log the result to the console.
let result1 = x > 10 && y < 5;
console.log(result1);

// TAsk 12 : Write a program that uses the || operator to combine two condition and log the result to the console.
let result2 = x > 10 || y < 5;
console.log(result2);

// TAsk 13 : Write a program that uses the ! operator to negate a condition and log the result to the console.
let result3 = !(x == y);
console.log(result3);

// Activity 5 : Ternary Operator

// Task 14 : Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let number = 2;
let result = number >= 0 ? "positive" : "negative";
console.log(result);

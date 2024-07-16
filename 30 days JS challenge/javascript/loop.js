// Day 4 : Loops 

// Tasks / Activities : 

// ===================== Activity 1 : For loop ========================

// Task 1 : Write a Program to print numbers from 1 to 10 using a for loop.
console.log("1 to 10 numners :")
for (let index = 1; index < 11; index++) {
    console.log(index);
}

// Task 2 : Write a program to print the multiplication table of 5 using a for loop.
console.log("Multiplication table of 5 : ")
for(let i = 1; i <= 10; i++){
    console.log(i * 5);
}

// ===================== Activity 2 : While loop =============================

// Task 3 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop. 
console.log("Sum of numbers from 1 to 10 :")
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);

// Task 4 : write a program to print numbers from 10 to 1 using while loop. 
console.log("Numbers from 10 to 1");
let j = 10;
while (j > 0) {
    console.log(j);
    j--;
}

// ======================= Activity 3 : Do.. While loop =========================

// Task 5 : Write a program to print numbers from 1 to 5 using a do while loop. 
console.log("Numbers from 1 to 5");
let k = 1;
do {
    console.log(k)
    k++;
} while (k <= 5);

// Task 6 : Write a program to calculate the factorial of a number using a do while loop. 

let number = 5;
let factorial = 1;
let a = number;

do {
    factorial = factorial * a;
    a++;
} while (a > 0);

console.log(factorial);

// ========================== Activity 4 : Nested loop ==========================

// Task 7 : Write a program to print a pattern using nested for loop. 
// *
// * *
// * * *
// * * * *
// * * * * *
console.log("Pattern:")
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = " ";

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
    
}

// ========================= Activity 5 : Loop control statement =====================

// Task 8 : Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement. 
console.log("Number from 1 to 10, skip number 5")
for (let index = 1; index <= 10; index++) {
    if(index === 5) {
        continue
    }
    console.log(index);
    
}

// Task 9 : Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
console.log("Using break")

for (let i= 1; i <= 10; i++) {
    if(i === 7){
        break;
    }
    console.log(i);
}
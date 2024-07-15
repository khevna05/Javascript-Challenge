// Day 3 : Control Structure

// Tasks / Activities :

// ====================== Activity 1 : If - else statements ==========================

// Task 1 : Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 8;

if (num > 0) {
  console.log("The number is Positive");
} else if (num < 0) {
  console.log("The number is Negative");
} else {
  console.log("The Number is Zero");
}

// Task 2 : Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 23;

if (age >= 18) {
  console.log("The person is eligible to vote");
} else {
  console.log("The person is note eligible to vote");
}

// ========================== Activity 2 : Nesed if - else statements ============================

// Task 3 : Write a program to find the largest of three numbers using nested if - else statements.
let a = 43;
let b = 23;
let c = 30;

if (a >= b) {
  if (a >= c) {
    console.log(a, "is the largest value");
  } else {
    console.log(c, "is the largest value");
  }
} else {
  if (b >= c) {
    console.log(b, "is the largest value");
  } else {
    console.log(c, "is the largest value");
  }
}

// =========================== Activity 3 : Switch case ===========================

// Task 4 : Write a program that uses a switch case to determine the day of the week based on number (1-7) and log the day name to the console.
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;

  case 3:
    dayName = "Wednesday";
    break;

  case 4:
    dayName = "Thursday";
    break;

  case 5:
    dayName = "Friday";
    break;

  case 6:
    dayName = "Saturday";
    break;

  case 7:
    dayName = "Sunday";
    break;

  default:
    dayName = "Invalid day";
}

console.log(dayName);

// Task 5 : Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on score and log the grade to the console.
let marks = 99;
let grade;

switch (true) {
    case (marks >= 90):
        grade = "A";
        break;

    case (marks >= 65):
        grade = "B";
        break;
    
    case (marks >= 50):
        grade = "C";
        break;
    
    case (marks >= 35):
        grade = "D";
        break;

    default:
        grade = "F";
}

console.log("Grade:", grade);


// ============================ Activity 4 : Conditional (Ternary) operator ======================

// Task 6 : Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number = 5;
let result =  number > 0 ? "Number is even" : "Number is odd";
console.log(number + " : " + result);

// ============================ Activity 5 : Combining Conditions ================================

// Task 7 : Write a program to check if a year is a leap year using multiple condition (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2000;

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year, "is a leap year");
}else{
    console.log(year, " is not a leap year");
};

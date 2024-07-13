//Day 1: Variable and Data types

// Tasks/Activites:

// Activity 1: Variable Declaration
// Task 1: Decalre a variable using var, assign it a number and log the value to the console.
var num = 5;
console.log(num);

// Task 2: Decalre a variable using let, assign it a string and log the value to the console.
let name = "khevna";
console.log(name);

// Activity 2: Constant Declaration
// TAsk 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const a = true;
console.log(a);

// Activity 3: 
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let number = 34;
console.log(typeof number, number);

let secondName = "joe";
console.log(typeof secondName, secondName);

let x = false;
console.log(typeof x, x);

let data = {
    name: "kartik",
    age: 25,
    hobby: "dancing"
}
console.log(typeof data, data);

let arr = [1, 2, 3, 5, 6, 8]
console.log(typeof arr, arr);

// Activity 4: 
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let intialValue = 45;
intialValue = 78;
console.log(intialValue);

const value = 34;
value = 55;
console.log(value); // => TypeError: Assignment to constant variable. const cannot be reassign.


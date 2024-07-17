// Day 5 : Funtion 

// Tasks / Activities :

// Activity 1 : Function Declaration 

// Task 1 : Write a function to check if a number is even or odd and log the result to the console. 
function check(number) {
    if (number % 2 === 0) {
        console.log("Number is even")
    }else{
        console.log("Number is odd")
    }
}

check(3);

// Task 2 : Write a function to calculate the square of a number and return the result. 
function square(number) {
    return number * number;
}

console.log("square of number",square(5));

// Activity 2 : Function Expression 

// Task 3 : write a function expression to find the maximum of two numbers and log the result to the console. 
const max = function(a,b){
    return a > b ? a : b;
}
console.log(max(3,5));

// TAsk 4 : Write a function expression to concatenate two strings and return the result. 
const str = function(str1, str2) {
    return str1 + " " + str2
}
console.log(str("Hello","World"));

// Activity 3 : Arrow function 

// Task 5 : Write an arrow function to calculate the sum of two numbers and return the result. 
const sum = (a,b) => {
    return a + b;
}
console.log(sum(6,7));

// Task 6 : Write an arrow function to check if a string contains a specific character and return a boolean value. 
const checkCharacter = (str, char) => {
    return str.includes(char);
}
console.log(checkCharacter("Hello", "e"));
console.log(checkCharacter("world", "a"));

// Activity 4 : Function parameters and default values 

// Task 7 : Write a function that takes two parameters and returns their product. Provide a default value for the second parameter. 
function product(a, b = 1) {
    return a * b;
}
console.log(product(5,3));
console.log(product(4));

// Task 8 : Write a function that takes a person's name and age and return a greeting message. Provide a default value for the age. 
function person(name, age = 18) {
    return "My name is " + name + " " + "and my age is " + age ; 
}
console.log(person("khevna", 22));
console.log(person("Isha"));

// Activity 5 : Higher order function 

// Task 9 : Write a higher order function that takes a function and a number, and calls the function that many times. 
function repeat(func, times) {
    for (let i = 0; i< times; i++) {
        func();
    }
}

function run(){
    console.log("Hello");
}

repeat(run, 3);

// Task 10 : Write a higher order function that takes two function and a value, applies the first function to the value, and then applies the second function to the result. 
function main(fun1, fun2, val){
    const resultFun1 = fun1(val);
    const finalResult = fun2(resultFun1);
    return finalResult;
}

function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

const number = 3;
const result = main(addOne, square, number);
console.log(result);
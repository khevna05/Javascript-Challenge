// Day 6 :

// Task / Activities :

// Activity 1 : Array creation and Access

// Task 1 : Create an array of numbers from 1 to 5 and log the array to the console. 
let a = [1, 2, 3, 4, 5]
console.log(a);

// Task 2 : Access the first and last elements of the array and log them to the console.
let b = [10, 20 , 30 , 40 ,50]
console.log(b[0]);
console.log(b[4]); 

// Activity 2 : Array Method (Basic)
let c = [1, 2, 3, 4, 5]

// Task 3 : Use the push method to add a new number to the end of the array and log the updates array.
c.push(6);
console.log(c);

// Task 4 : Use the pop method to remove the last elment from the array and log the updated array. 
c.pop()
console.log(c);

// Task 5 : Use the shift method to remove the first element from the array and log the updated array. 
c.shift();
console.log(c);

// Task 6 : Use the unshift method to add a new number to the beginning of the array and log the updated array. 
c.unshift(0);
console.log(c);

// Activity 3 : Array method (Intermediate)
let d = [5, 10, 15, 20, 25, 30]

// Task 7 : Use the map method to create a new array where each number is doubled and log the new array. 
let doubled = d.map((val) => {
    return val * 2;
});

console.log("Doubled : ",doubled);

// Task 8 : Use the filter method to create a new array with only even numbers and log thr new array. 
let newArr = d.filter((val) => {
    return val % 2 === 0;
})

console.log("Even Numbers: ",newArr);

// Task 9 : Use the reduce method to calculate the sum of all numbers in the array and log the result. 
let sum = d.reduce((x,y) => {
    return x + y;
});

console.log("Sum of all the numbers: ",sum);

// Activity 4 : Array Iteration 
let e = [2, 4, 6, 8, 10]

// Task 10 : Use a for loop to iterate over the array and log each element to the console. 
console.log("for loop: ")
for (let i = 0; i < e.length; i++) {
    console.log(e[i]);
}

// Task 11 : Use the foreach method to iterate over the array and log each element to the console. 
console.log("foreach method: ")
e.forEach((val) => {
    console.log(val);
});

// Activity 5 : Multi dimensional array 
let f = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Task 12 : Create a two dimensional array (matrix) and log the entire array to the console. 
console.log(f);

// Task 13 : Access and log a specific element from the two dimensional array. 
console.log(f[0][0]);
console.log(f[1][2]);


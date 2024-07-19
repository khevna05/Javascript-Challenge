// Day 7 : Object

// Task / Activities :

// Activity 1 : Object creation and Access 

// Task 1 : Create an object representing a book with properties like title, author and year and log the object to the console. 
let book = {
    title : "The immortals of Meluha",
    author : "Amish",
    year : 2010
}; 

console.log(book);

// Task 2 : Access and log the title and author properties of the book object. 
console.log(book.title);
console.log(book.author);

// Activity 2 : Object method 

// Task 3 : Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method. 
let book1 = {
    title : "The immortals of Meluha",
    author : "Amish",
    year : 2010,
    info : function() {
        console.log(`The title of the book is ${this.title} and name of the author ${this.author}`)
    }
}

book1.info();

// Task 4 : Add a method to the book object that takes a parameter (year) and update the book's year property, then log the updated object. 
let book2 = {
    title : "The Great Gatsby",
    author : "F. Scott",
    year : 1925,
    updatedYear : function(newYear) {
        this.year = newYear;
        console.log(this);
    }
}

book2.updatedYear(2024);

// Activity 3 : Nested object 

// Task 5 : Create a nested object representing a library with properties like name and book (an array of book objects), and log the library object to the console. 
let library = {
    name : "City Library",
    books : [
        {
            title : "The Great Gatsby",
            author : "F. Scott",
            year : 1925 
        },

        {
            title : "The immortals of Meluha",
            author : "Amish",
            year : 2010
        },

        {
            title : "1984",
            author : "George",
            year : 1949,
        }

    ]
}

console.log(library);

// Task 6 : Access and log the name of the library and the titile of all the books in the library. 
console.log(library.name);
library.books.forEach(book => {
    console.log(book.title);
});

// Activity 4 : The this keyword 

// Task 7 : Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method. 
let book3 = {
    title : "The immortals of Meluha",
    author : "Amish",
    year : 2010,
    info : function() {
        console.log(`The title of the book is ${this.title} and published in year ${this.year}`)
    }
};

book3.info();

// Activity 5 : Object iteration 

// Task 8 : Use a for...in loop to iterate over the properties of the bbook object and log each property and its value. 
let book4 = {
    title : "1984",
    author : "George",
    year : 1949
}

for(let property in book) {
    console.log(`${property}: ${book[property]}`);
}

// Task 9 : Use object.key and object.values methods to log all the keys and values of the book object. 
let book5 = {
    title : "To kill a Mockingbird",
    author : "Harper Lee",
    year : 1960
};

let keys = Object.keys(book5);
console.log("Keys:");
keys.forEach(key => {
    console.log(key);
});

let values = Object.keys(book5);
console.log("Values:");
keys.forEach(value => {
    console.log(value);
});
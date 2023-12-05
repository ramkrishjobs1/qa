/*
Several array methods are commonly used in JavaScript for manipulating and working with arrays. Here are some of the most frequently used array methods:

forEach(callback):

Iterates over each element in the array and executes the provided callback function.
javascript
Copy code
array.forEach((element, index) => {
    // Your code here
});
map(callback):

Creates a new array by applying a provided function to each element in the array.
javascript
Copy code
const newArray = array.map(element => {
    // Transformation logic
    return modifiedElement;
});
filter(callback):

Creates a new array containing elements that satisfy the provided testing function.
javascript
Copy code
const filteredArray = array.filter(element => {
    // Return true if element meets the condition
});
find(callback):

Returns the first element in the array that satisfies the provided testing function.
javascript
Copy code
const foundElement = array.find(element => {
    // Return true if element meets the condition
});
indexOf(element) and lastIndexOf(element):

Returns the index of the first (or last) occurrence of a specified element in the array.
javascript
Copy code
const firstIndex = array.indexOf(element);
const lastIndex = array.lastIndexOf(element);
includes(element):

Determines whether the array contains a specific element and returns a boolean.
javascript
Copy code
const containsElement = array.includes(element);
some(callback) and every(callback):

some returns true if at least one element satisfies the provided testing function.
every returns true if all elements satisfy the provided testing function.
javascript
Copy code
const someElementsPass = array.some(element => {
    // Return true if at least one element meets the condition
});

const allElementsPass = array.every(element => {
    // Return true if all elements meet the condition
});
reduce(callback, initialValue):

Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
javascript
Copy code
const result = array.reduce((accumulator, currentValue) => {
    // Your logic for combining values
    return updatedAccumulator;
}, initialValue);
sort(callback):

Sorts the elements of an array in place.
javascript
Copy code
array.sort((a, b) => {
    // Your comparison logic
    return comparisonResult;
});
These methods provide powerful tools for manipulating and transforming arrays in JavaScript. Depending on the specific use case, you may find some methods more suitable than others.

*/

const fruits = ['banana', 'apple', 'orange'];

fruits.sort();

console.log(fruits); // Output: ['apple', 'banana', 'orange']

//----------------------
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(`Sum of numbers: ${sum}`);

//------------------------
const numbers = [1, 2, 3, 4];

const someEven = numbers.some(number => {
    return number % 2 === 0;
});

const everyEven = numbers.every(number => {
    return number % 2 === 0;
});

console.log(`Some are even: ${someEven}`);
console.log(`Every number is even: ${everyEven}`);

//---------------------

const fruits = ['apple', 'banana', 'orange'];

const includesBanana = fruits.includes('banana');
const includesGrapes = fruits.includes('grapes');

console.log(`Includes 'banana': ${includesBanana}`);
console.log(`Includes 'grapes': ${includesGrapes}`);

//--------------------
const fruits = ['apple', 'banana', 'orange', 'apple'];

const indexOfApple = fruits.indexOf('apple');
const lastIndexOfApple = fruits.lastIndexOf('apple');

console.log(`Index of 'apple': ${indexOfApple}`);
console.log(`Last index of 'apple': ${lastIndexOfApple}`);
//-------------------------
const numbers = [1, 2, 3, 4];

const firstEvenNumber = numbers.find(number => {
    return number % 2 === 0;
});

console.log(firstEvenNumber);
//-------------------------------
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
});

console.log(evenNumbers);
//-----------------------------------
const numbers = [1, 2, 3, 4];

const squaredNumbers = numbers.map(number => {
    return number * number;
});

console.log(squaredNumbers);
//-----------------------------------
const numbers = [1, 2, 3, 4];

numbers.forEach((number, index) => {
    console.log(`Element at index ${index}: ${number}`);
});
//----------------------------------
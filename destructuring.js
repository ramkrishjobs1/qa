function foo() {
    return [1, 2, 3];
}
let arr = foo(); // [1,2,3]

let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3
function getCar() {
  return {
    make: 'Tesla',
    model: 'g95',
    metadata: {
      vin: '123abc',
      miles: '12000'
    }
  };
}

// const {make, model} = getCar();
// console.log(make, model); // Tesla g95

const [make, model] = Object.values(getCar()); //Object.keys
console.log(make, model);

// const {make, metadata: {miles}} = getCar();
// console.log(make, miles); // Tesla 12000

// JSON object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
      city: 'New York',
      country: 'USA'
  }
};

// Destructuring the JSON object
const { name, age, address: { city, country } } = person;

// Output the extracted values
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);
console.log(`Country: ${country}`);

// Array of objects
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 22 }
];

// Destructuring an array of objects
const [firstUser, secondUser, thirdUser] = users;

// Output the extracted values
console.log(`First User: ${firstUser.name}, Age: ${firstUser.age}`);
console.log(`Second User: ${secondUser.name}, Age: ${secondUser.age}`);
console.log(`Third User: ${thirdUser.name}, Age: ${thirdUser.age}`);


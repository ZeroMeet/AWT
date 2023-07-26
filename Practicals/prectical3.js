
let x = 10;
if (true) {
  let x = 20;
  console.log(x); 
}
console.log(x); 


const PI = 3.14159;
console.log(PI);
const add = (a, b) => a + b;
console.log(add(2, 3)); 
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); 
const arr = [1, 2, 3];
for (const element of arr) {
  console.log(element);
}

const map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map.get("name"));
console.log(map.get("age"));
const set = new Set();
set.add(1);
set.add(2);
set.add(2); 
console.log(set); 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const john = new Person("John", 30);
john.sayHello(); 
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3];
      if (data.length > 0) {
        resolve(data);
      } else {
        reject("Data not available");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


const sym = Symbol("description");
const obj = {
  [sym]: "This is a symbol property",
};

console.log(obj[sym]); 

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); 
greet("John"); 
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); 


let x = 10;
if (true) {
  let x = 20;
  console.log(x); 
}
console.log(x); 
const PI = 3.14;
console.log(PI);
const add = (a, b) => a + b;
console.log(add(25, 3.5)); 
const a1 = [50,51,52];
const a2 = [...a1, 40,41];
console.log(a2); 
const arr = [10,12,14,16];
for (const i of arr) {
  console.log(i);
}

const map = new Map();
map.set("name", "Meet");
map.set("Collage", "CSPIT");
console.log(map.get("name"));
console.log(map.get("Collage"));
const set = new Set();
set.add(15);
set.add(16);
set.add(17); 
console.log(set); 
class Person {
  constructor(name, Collage) {
    this.name = name;
    this.Collage = Collage;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.Collage} years old.`);
  }
}

const p1 = new Person("Meet", 19);
p1.sayHello(); 
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3];
      if (data.length > 0) {
        resolve(data);
      } else {
        reject("Data not available");
      }
    }, 5000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


const sym = Symbol("description");
const obj = {
  [sym]: "Hello",
};

console.log(obj[sym]); 

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); 
greet("Meet"); 
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); 

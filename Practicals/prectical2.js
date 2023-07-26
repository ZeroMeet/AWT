
let Arr = [1, "Meet", true, 15.2, 5,{"ID":60}];

console.log("Length of the Arr:", Arr.length);
console.log("Element at index 2:", Arr[2]);
console.log("Element at index 4:", Arr[4]);
Arr.push(6.95);
Arr.pop(); 
Arr.shift(); 
Arr.unshift(0); 
const joinedArr = Arr.join(", ");
console.log("New Array is", joinedArr);
delete Arr[2];
console.log("Array after deletion:", Arr);
let newArr = Arr.concat([6, 7, 8]);
console.log("Concatenated Array:", newArr);
let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flattenedArr = nestedArr.flat(2);
console.log("Flattened Array:", flattenedArr);
let splicedArr = Arr.slice(1, 4);
console.log("Spliced Array:", splicedArr);
let person = {
    name: "Meet Lad",
    collage:"CSPIT",
    department:"CE"
  };
  function displayPersonDetails(personObj) {
    console.log("Name:", personObj.name);
    console.log("Age:", personObj.age);
    console.log("Gender:", personObj.gender);
  }
  
displayPersonDetails(person);
  

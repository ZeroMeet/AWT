
let numbersArray = [1, 2, 3, 4, 5];

console.log("Length of the array:", numbersArray.length);


console.log("Element at index 2:", numbersArray[2]);
console.log("Element at index 4:", numbersArray[4]);


numbersArray.push(6);
numbersArray.pop(); 
numbersArray.shift(); 
numbersArray.unshift(0); 


const joinedArray = numbersArray.join(", ");
console.log("Joined array:", joinedArray);


delete numbersArray[2];
console.log("Array after deletion:", numbersArray);


let newArray = numbersArray.concat([6, 7, 8]);
console.log("Concatenated array:", newArray);

let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(2);
console.log("Flattened array:", flattenedArray);

let splicedArray = numbersArray.slice(1, 4);
console.log("Spliced array:", splicedArray);




let person = {
    name: "John Doe",
    age: 30,
    gender: "Male",
  };
  

  function displayPersonDetails(personObj) {
    console.log("Name:", personObj.name);
    console.log("Age:", personObj.age);
    console.log("Gender:", personObj.gender);
  }
  

  displayPersonDetails(person);
  
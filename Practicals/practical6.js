Array.prototype.customMethod = function() {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (this[i] % 2 === 0) {
        result.push(this[i]);
      }
    }
    return result;
  };
  
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const even = numbers.customMethod();
  console.log(even); 
  
  const myString = "String prototype called";
  const str = myString.capitalize();
  console.log(str); 
  
function factorial(num) {
    function calculateFactorial(n) {
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * calculateFactorial(n - 1);
      }
    }
  
    return calculateFactorial(num);
  }
  
  const num = 5;
  console.log(`Factorial of ${num} is: ${factorial(num)}`);
  
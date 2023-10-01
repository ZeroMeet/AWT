function infiniteNumberGenerator() {
    let count = 0;
  
    return {
      next: function () {
        return { value: count++};
      },
    };
  }
const infiniteIterator = infiniteNumberGenerator();
for (let i = 0; i < 5; i++) {
  console.log(infiniteIterator.next().value);
}




function* evenNumberGenerator() {
    let evenNumber = 0;
    while (true) {
      yield evenNumber;
      evenNumber += 2;
    }
  }
const evenGenerator = evenNumberGenerator();
for (let i = 0; i < 5; i++) {
  console.log(evenGenerator.next().value);
}
  
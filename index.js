//1.Custom filter method:


Array.prototype.customFilter = function(callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }
    return filteredArray;
  };
  
  const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.customFilter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//2.Custom find method:

Array.prototype.customFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };

  const numbers2 = [1, 2, 3, 4, 5];
const result = numbers.customFind(num => num > 3);
console.log(result); // Output: 4

//3.Custom findIndex method:

Array.prototype.customFindIndex = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return i;
      }
    }
    return -1;
  };

  const numbers3 = [1, 2, 3, 4, 5];
const index = numbers.customFindIndex(num => num === 3);
console.log(index); // Output: 2

//4.Custom indexOf method:

Array.prototype.customIndexOf = function(value) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === value) {
        return i;
      }
    }
    return -1;
  };

  const fruits = ['apple', 'banana', 'cherry'];
const index1 = fruits.customIndexOf('banana');
console.log(index); // Output: 1

//5.Custom reduce method:

Array.prototype.customReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  
    return accumulator;
  };

  const numbers4 = [1, 2, 3, 4, 5];
const sum = numbers.customReduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 15
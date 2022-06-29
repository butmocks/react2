// const n = 5 ;
// let sum = '';

// for (let i = 1;i<5;i++) {
//   sum += i;
// }

// const strat = 50;
// const end = 60;
// let result = 0;

// for (let i = 50;i <= 60;i++) {
//   if (i%5 === 0) {
//     console.log(i);
//   } else if (i%2 === 0 && i%4 === 1) {
//     result += i;
//   } else if (i%3 === 0) {
//    result -= i;
//   } else if (i%4 === 0) result *= i;
// }

// let sum = 0;

// for (let i = 0; i <= 1000; i++) {

//   if (i%2 === 1) {
//       console.log('Found')
//       sum += i;
//   }

//   if (i === 1000 && sum >5000) {
//         console.log('Bigger');
//     } else if (i === 1000 && sum < 5000) {
//     console.log('Smaller or equal');
//     }
// }

// let sum = 0;
// for (let i = 0; i <= 1000; i++) {
//     sum += i;
// }

// const num = 1234;
// const divide = sum/num;
// const modulus = sum%num;

//  (divide > modulus) ? console.log(true) : console.log(false);

//////  як знайти просте чило       Function             /////

// function isPrime(num) {
//   for (let i = 2, max = Math.sqrt(num);i <= max;i++) {
//     if (num%i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// function getPrimes(num) {
//   for (let i = 2;i<=num;i++) {
//     if(isPrime(i)) {
//      console.log(i);
//     }
//   }
// }

// getPrimes(10);

// function increaser(a, index) {
//   if (a > index) {
//     return a + index;
//   } else {
//     return a;
//   }
// }

// console.log(increaser(3, 6));

///////////                                 Arrays                 /////////////

// function swapManual(numbers) {
//   let newSwapArr = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (i > 0) {
//       newSwapArr.push(numbers[i]);
//     }
//   }

//   newSwapArr.push(numbers[0]);
//   return newSwapArr;
// }

// console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]

// function squareArray(arr) {
//   let newSquareArr = [];

//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     newSquareArr.push(Math.pow(arr[i], 2));
//   }
//   return newSquareArr;
// }

// // examples
// console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
// console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
// console.log(squareArray([1])); // ==> [1]

// function checkSum(arr) {

//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   let sumElements = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sumElements += arr[i];
//   }

//   return sumElements > 100;
// }

// console.log(checkSum([10, 15, 84, 16, 24])) ;
// console.log(checkSum([10, 5, 8, 9])) ;

// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let newIncrease = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newIncrease.push(arr[i] + delta);
//     } else {
//       newIncrease.push(arr[i]);
//     }
//   }
//   return newIncrease;
// };

// const increaseEvenEl = (arr, delta) => {

//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   let newIncrease  = [...arr];

//   for (let i = 0; i < newIncrease.length; i++) {
//     if (newIncrease[i] % 2 === 0) {
//       newIncrease[i] += delta
//     }
//   }

//   return newIncrease;
// };

// // examples
// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
// console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
// console.log(increaseEvenEl([], 120)); // ===> []

// function checker(arr) {

//   if (!Array.isArray(arr)) {
//       return null;
//   }

//   let maxNumber = 0;
//   let minNumber = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > maxNumber) {
//           maxNumber = arr[i];
//       } else if (arr[i] < minNumber) {
//           minNumber = arr[i];
//       }
//   }

//   const sum = maxNumber + minNumber;

//   return sum > 1000;
// }

// console.log(checker([103, 150, 350, 500, 290, 900])) ;
// console.log(checker([50, 60, 70, 200, 300, 20])) ;
// console.log(checker(35,566, 600, 1000, 200));

//////////////////////////     СОРТУВАННЯ МАСИВУ МЕТОДОМ БУЛЬБАШКА //////////////////////////////////////

// function sortAsc(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }

//   for (let i = 0, bub; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         bub = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = bub;
//       }
//     }
//   }

//   return array;
// }

// function sortDesc(array) {
//   if (!Array.isArray(array)) {
//       return null;
//   }

//   for (let i = 0, bub; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - 1; j++) {
//       if (array[j] < array[j + 1]) {
//         bub = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = bub;
//       }
//     }
//   }

//   return array;
// }

// console.log(sortAsc([2, 4, 6, 64, 7, 5]));
// console.log(sortDesc([2, 4, 6, 64, 7, 5]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function withdraw(clients, balances, client, amount) {
//   for (let i = 0; i < clients.length; i++) {
//     if (clients[i] === client) {
//       const cash = balances[i];
//       if (cash > amount) {
//         return cash - amount;
//       } return -1;
//     }
//   }
// }

// console.log(withdraw(["Anna", "John", "User"], [1400, 87, -6], "John", 50));
// console.log(withdraw(["Anna", "John", "User"], [1400, 87, -6], "User", 10));

//////////////////////////// Unshift /////////////////////////////////////////////////

// function reverseArray(arr) {
//   if (!Array.isArray(arr)) {
//       return null;
//   }
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.unshift(arr[i]);
//   }
//   return newArr;
// }

// console.log(reverseArray([4, 5, 8, 2, 15])) ;

////////////////         Видалення дублікатуів //////////////////////////

// function removeDuplicates(array) {
//   if (!Array.isArray(array)) {
//       return null;
//   }
//   const uniqeArr = [...new Set(array)];
//   return uniqeArr;
// }

// function removeDuplicates(array) {
//   if (!Array.isArray(array)) {
//       return null;
//   }
//       const uniqueArray = Array.from(new Set(array));
//       return uniqueArray;
// }
// const uniqArray = array.filter((index, item) => {
//   return index === array.indexOf(item);
// })

// console.log(removeDuplicates([1, 5, 7, 2, 1, 1, 4, 5, 2]));

///////////////////////////////////////////////////////////////////////

// function uniqueCount(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   let newArr = [];
//   for (let num of arr) {
//     if (!newArr.includes(num)) {
//       newArr.push(num);
//     } 
//     }
//     return newArr.length;
//     return new Set(arr).size;
//   }

// console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));

//////////////////////////////////  функція яка рахує count і витягує ключі які повторяються  /////////
// function a(arr) {
//   const map = new Map();
//   for(const num of arr) {
//   if (map.has(num)) {
//           map.set(num, map.get(num) + 1)
//       } else {
//           map.set(num, 1);
//       }
//   }
//   console.log(map);
// return [...map].filter(([,value]) => value > 1 ).map(([key]) => key);
// }


// console.log(uniqueCount([1, 5, 7, 2, 1, 1, 4, 5, 2]));


////////////////////////////   is elements in Array    //////////////////
// const includes = (arr, num) => {

//   for (let i = 0; i < arr.length; i++) {
//     if (num === arr[i]) {
//       return true;
//     } 
//   }
//   return false;
// };

// // examples
// console.log(includes([1, 4, 8, 3], 3)) ; // ==> true
// console.log(includes([1, 4, 8, 3], 5)) ; // ==> false

///////////////////////////////////////////////////////////////////////

// const getSubArray = (arr, numberOfElements) => {

//   let firstlyNumberArray =[];

//     for (let i = 0; i < arr.length; i++) {
//       if (i < numberOfElements) {
//         firstlyNumberArray.push(arr[i]);
//       }
//     }
//   return firstlyNumberArray;
// };

// console.log(getSubArray([11, 4, 8, 3], 2));
// console.log(getSubArray([1, 2, 3, 4, 5], 3));
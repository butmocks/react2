//////////////////////////////////////////////////   OBJECT /////////////
// const transformToObject = arr => {
//   // put your code here
//   let obj = {};

//   arr.forEach(elem => {
//   obj[elem] = elem;
//   });

//   return obj;
// };

// // examples
// console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }

////////////////   присвоєння обєкту значень .................

// const transaction = {
//   currency: 'USD',
//   value: 170,
//   operation: 'sale',
//   agent: {
//     country: 'Ukraine',
//     company: 'NYSE',
//   },
//   'operation time': 1584029990001,
// };

// console.log(transaction.currency);
// console.log(transaction.value);
// console.log(transaction.operation);
// console.log(transaction.agent.company);
// console.log(transaction.agent.country);
// console.log(transaction['operation time']);

// const user = {
//   name: 'Tom',
//   age: 17,
// };

// user.hobby = 'football';
// user.anotherKey = false;
// user['favorite music'] = 'rock';
// user['address'] = {};
// user['address']['country'] = 'Ukraine';
// user['address']['building'] = 17;

// console.log(user);

// const anotherKey = 'married';

///////////////////////////////////////////////  is element in Object ////////

// const pickProps = (obj, props) => {
//   const newobj = {};

//   for (let key in obj) {
//     if (props.includes(key)) {
//       newobj[key] = obj[key];
//     }
//   }
//     return newobj;
// };

// const pickProps = (obj, props) => {
//   const newobj = {};

//   for (const key of props) {
//     if (obj.hasOwnProperty(key)) {
//       newobj[key] = obj[key];
//     }
//   }
//     return newobj;
// };

// examples)
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"])); // ==> { a: 1, c: 3 }
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c", "d", "hex"])); // ==> { a: 1, c: 3 }

//////////////////////////////////

// const getAdults = obj => {
//   const newObj = {};
//   for (let key in obj) {
//     if (obj[key] >= 18) {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj
// };

// // examples
// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
// console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
/////////////////////////////////////////

// const users = {
//   'John Doe': 19,
//   'Tom': 17,
//   'Bob': 18,
// }

// const getAdults = usersObj =>  Object.entries(usersObj)
// .filter(user => user[1] >= 18)
// .map(user => user[0]);

// getAdults(users);

//////////////////////////////////////////////   copy object

// const copyObj = obj => Object.assign({}, obj);

// const newObj = {...obj};

//////////////////////////     Object.keys()   METODS       ////////////////////////
// function getKeys(obj) {
//   const names = Object.keys(obj);
//   names.forEach(name => {
//     console.log(name);
//   })
// }

// const users = {
//   'John Doe': 19,
//   'Tom': 17,
//   'Bob': 18,
// }

// console.log(getKeys(users));
//////////////////////////////////////////  ADD ELEMENTS IN ARRAY AND WORK WIHT OBJECT.ASSIGN //////////////////

// function addPropertyV1(userData, userId) {
//    userData.id = userId;
//    return userData;
// }

// function addPropertyV2(userData, userId) {
//  const id = userId;
//   return Object.assign(userData, {id});
// }
// function addPropertyV3(userData, userId) {
//   const id = userId;
//   const newUserData = Object.assign({}, userData);
//   newUserData.id = userId;
//   return newUserData;
// }

// function addPropertyV4(userData, userId) {
//   const id = userId;
//   const newObj = { ...userData, id};
//   return newObj;
// }
// // examples
// const user = {
// name: 'Sam',
// };
// console.log(user);
// console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV2(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV3(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV4(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }

////////////////////////////////////////////

// function mergeObjectsV1(obj1, obj2) {
//   return Object.assign(obj1, obj2);
// }

// function mergeObjectsV2(obj1, obj2) {
//   return Object.assign(obj2, obj1);
// }

// function mergeObjectsV3(obj1, obj2) {
//   const res = { ...obj1, ...obj2 };
//   return res;
// }

// function mergeObjectsV4(obj1, obj2) {
//  const res = { ...obj2, ...obj1 };
//  return res;
// }

// examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   student: false,
// };

// console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
// console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }

/////////////////////////////////////  Object Array peoples    ///////////////

//   const getPeople = obj => {
//   const arrObj = Object.values(obj);
//   const flatArray = arrObj
//   .reduce((acc, elem) => {
//     return acc.concat(elem)}, 
//     []);
//     const newArr = flatArray
//     .map((user) => Object.entries(user));
//     const nameArray = [];
//     newArr.filter(user => nameArray.push(user[0]));
//     const namesArr = [];
//     nameArray.filter(user => namesArr.push(user[1]));
//     return namesArr;
// };

// const rooms = {
//     room1: [
//       { name: 'Jack'},
//       { name: 'Andrey'},
//       { name: 'Ann' },
//       { name: 'Vasyl' },
//     ],
//     room2: [
//       { name: 'Dan' },
//     ],
//     room3: [
//       { name: 'Denis' },
//       { name: 'Max' },
//       { name: 'Alex' },
//     ]
// };

// console.log(getPeople(rooms));

///////////////////////   

// const getTotalRevenue = (transactions) => {
//   const newArr = transactions
//     .map((user) => Object.entries(user));
//     const result = []
//       newArr.filter(user => result.push(user[1])); 
//       const sum = result
//       .reduce((acc, elem) => { 
//         return acc + elem[1] 
//       }, 0);
//       return sum;
// };

// // examples
// const dayTransactions = [
//   { userId: 22, amount: 60, operation: "sell" },
//   { userId: 22, amount: 160, operation: "buy" },
//   { userId: 44, amount: 90, operation: "sell" },
// ];

// const result = getTotalRevenue(dayTransactions); // ==> 310

// console.log(result);
/////////////////////////////////////////////////    нерішина задача  ////////////////
///   111
const getCustomersList = obj => {
  const newObj = { ...obj }
  const arrArr = Object.entries(newObj);
  const newArr = [];
  const objct = {};
  const id = 'id';
  arrArr.filter(elem => {
    objct[id] = elem[0];
    newArr.push(Object.assign(objct, elem[1]));
  });
  newArr.sort((a, b) => {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
  });
  return newArr;
};
///   222
const getCustomersList = obj => Object.entries(obj)
  .reduce((acc, elem) => {
    acc.push({
      id: elem[0],
      ...elem[1]
    })
    return acc;
  }, [])
  .sort((a, b) => {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
  });
const customers = {
  'customer-id-1': {
    name: 'Willian',
    age: 54
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17
  }
};

console.log(customers);
console.log(getCustomersList(customers));
////////////////////////////////////////////////////////////  make object with two arrays  /////////////////
// function buildObject(keysList, valuesList) {
  // const uniqObject = keysList
  // .reduce(( uniqObject, elem, index) => {
  //   uniqObject[elem] = valuesList[index];
  //   return uniqObject;
  // }, {});
  // return uniqObject;

//   const result = {};
//   keysList.forEach((key, i) => result[key] = valuesList[i]);
//   return result;
// }

// examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values);
// console.log(result);

//////////////////////////////////////   порівняння обєкттів         /////////////////////////////////

// function compareObjects(obj1, obj4) {
//   for(const elem in obj1){
//     if(obj1.hasOwnProperty(elem)){
//         if(obj1[elem] !== obj4[elem]){
//             return false;
//         }
//     }
// }
// for(const elem in obj4){
//     if(obj4.hasOwnProperty(elem)){
//         if(obj1[elem] !== obj4[elem]){
//             return false;
//         }
//     }
// }
// return true;

// }

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

// console.log(compareObjects(obj1, obj2)); // ==> false
// console.log(compareObjects(obj2, obj3)); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true
////////////////////////////////////////////  add in array new key and value  /////////////////

// function addPropertyV1(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

// function addPropertyV2(obj, key, value) {
//   obj[key] = value;
//  return Object.assign( {}, obj)
// }

// function addPropertyV3(obj, key, value) {
// const res = Object.assign({}, obj);
// res[key] = value;
// return res;
// }

// function addPropertyV4(obj, key, value) {
// const objc = { ...obj };
// objc[key] = value;
// return objc;
// }

// const transaction = {
//   value: 170,
// };
// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
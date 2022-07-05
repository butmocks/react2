// Initialize an object
const name = {
  firstName: 'Philip',
  lastName: 'Fry'
};

// Initialize another object
const details = {
  job: 'Delivery Boy',
  employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(name, details);

console.log(character);

// ============

// Output
// { firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express" }

// =========


// Initialize an object
// const name = {
//   firstName: 'Philip',
//   lastName: 'Fry'
// };

// // Initialize another object
// const details = {
//   job: 'Delivery Boy',
//   employer: 'Planet Express'
// };

// // Merge the object with the spread operator
// const character = { ...name, ...details }

// console.log(character);

// ======

// Output
// { firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express" }

// ========
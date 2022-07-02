import * as fs from '../src'; 
// const fs = require('fs');
// import fs from './fs';
const filepath = 'hello.txt'
// const event = {
//   guests: [
//     { name: 'Tom', email: 't@gmail.com', age: 17 },
//     { name: 'Bob', email: 'b@gmail.com', age: 18 },
//   ],
//   message: 'Welcome to the party',
//   getInvitations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(({ name, email }) => ({
//         text: `Hi ${name}. ${this.message}`,
//         email,
//       }));
//   },
// };
// console.log(filepath);

// console.log(event.getInvitations());

function search(filepath) {
return (
    fs.readFile(filepath, (error, data) => {
      if (error) {
        console.error("Error" + error);
      } else {
        console.log("Data Found is : ")
        console.log(data)
        console.log("Data Found of type : ")
        console.log(typeof data)

      }
    }))
  }

  search()


// const path = require('path');
// const fs = require('fs');
// let filepath = path.join(__dirname, 'Diamond.py');

var fs = require("fs");
import { readFile } from "fs";

readFile(filepath, (error, data) => {
  if (error) {
    console.error("Error" + error);
  } else {
    console.log("Data Found is : ")
    console.log(data)
    console.log("Data Found of type : ")
    console.log(typeof data)

  }
})


//----------------------------------
// fs.readFile('./myconfig.json', 'utf8', function (err, data) {
//   myconfig = JSON.parse(data.toString('utf8').replace(/^\uFEFF/, ''));
// });
// // note: data is an instance of Buffer
//-----------------------------------

// function removeBom(input) {
//   // All alternatives found on https://en.wikipedia.org/wiki/Byte_order_mark
//   const fc = input[0].charCodeAt(0).toString(16);
//   switch (fc) {
//     case 'efbbbf': // UTF-8
//     case 'feff': // UTF-16 (BE) + UTF-32 (BE)
//     case 'fffe': // UTF-16 (LE)
//     case 'fffe0000': // UTF-32 (LE)
//     case '2B2F76': // UTF-7
//     case 'f7644c': // UTF-1
//     case 'dd736673': // UTF-EBCDIC
//     case 'efeff': // SCSU
//     case 'fbee28': // BOCU-1
//     case '84319533': // GB-18030
//       return input.slice(1);
//       break;
//     default:
//       return input;
//   }
// }

// const fileBuffer = removeBom(fs.readFileSync(filePath, "utf8"));

//-----------------------------------------



// fs.readFile('Diamond.py', function read(err, data) {
//   if (err) {
//     throw err;
//   }
//   var content = data;

//   console.log(content);

// });



// // import { readFileSync, promises as fsPromises } from 'fs'
// // const { readFileSync, promises: fsPromises } = require('fs')
// // let baseUrl = ('https://github.com/butmocks/react2/blob/main/Bot/botWithSearch/Diamond.py')

// let fs = ('./Diamond.py')
// console.log(fs)

// function checkIfContainsSync(fs, str) {
//   const contents = readFileSync(fs, 'utf-8');

//   const result = contents.includes(str);

//   return result;
// }

// console.log(checkIfContainsSync('./example.txt', 'hello'));

// // ✅ read file ASYNCHRONOUSLY
// async function checkIfContainsAsync(filename, str) {
//   try {
//     const contents = await fsPromises.readFile(filename, 'utf-8');

//     const result = contents.includes(str);
//     console.log(result);

//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }

// // 👇️ Promise<true>
// checkIfContainsAsync('./example.txt', 'hello');


// var fs = require("fs");

// import { readFileSync, readFile } from "./Diamond.py";

// /***
//  * implementation of readFileSync
//  */
// var data = readFileSync('input.txt');
// console.log(data.toString());
// console.log("Program Ended");

// /***
//  * implementation of readFile 
//  */
// readFile('input.txt', function (err, data) {
//   if (err) return console.error(err);
//   console.log(data.toString());
// });

// console.log("Program Ended");








// readFile(FILE_LOCATION, function (err, data) {
//   if (err) throw err;
//   if (data.includes('search string')) {
//     console.log(data)
//   }
// });




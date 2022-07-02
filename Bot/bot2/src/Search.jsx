import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
// import Counter from './Counter.jsx';
import Diamond from './Diamond.py'


import { readFile } from "fs";


const Diamond = props => {
  console.log(props);
}



const path = require('path');
const fs = require('fs');
let filepath = path.join(__dirname, 'Diamond.py');


{/* <header className="App-header"></header> */}

function Search() {
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
})


)
}
export default Search
// fs.readFile('./Diamond.py', 'utf8', function (err, data) {
//   myconfig = JSON.parse(data.toString('utf8').replace(/^\uFEFF/, ''));
// });
// note: data is an instance of Buffer
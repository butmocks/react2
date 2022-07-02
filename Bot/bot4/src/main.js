import newLocal from '../src/App';
const fs = newLocal;
// First I want to read the file
fs.readFile('./Index.html', function read(err, data) {
  if (err) {
    throw err;
  }
  const content = data;

  // Invoke the next step here however you like
  console.log(content);   // Put all of the code here (not the best solution)
  processFile(content);   // Or put the next step in a function and invoke it
});

function processFile(content) {
  console.log(content);
}



// let reader = new FileReader()
let textFile = 'hello.txt'

// function showFile(input) {
//   let file = input.files[0];

//   alert(`File name: ${file.name}`); // например, my.png
//   alert(`Last modified: ${file.lastModified}`); // например, 1552830408824
// }


function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(textFile);

  reader.onload = function () {
    console.log(reader.result);
  };

  reader.onerror = function () {
    console.log(reader.error);
  };

}
readFile()

// function printFile(file) {
//   var reader = new FileReader();
//   reader.onload = function (evt) {
//     console.log(evt.target.result);
//   };
//   reader.readAsText(file);
// }
// console.log(printFile())

// let numFiles = files.length;
// for (let i = 0, numFiles = files.length; i < numFiles; i++) {
//   var file = files[i];
//   ..
// }





// let link = document.createElement('a');
// link.download = 'hel.txt';

// let blob = new Blob(['Hello, world!'], { type: 'text/plain' });

// link.href = URL.createObjectURL(blob);

// link.click();

// URL.revokeObjectURL(link.href);

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<App />, rootElement);



// import { spawn } from "node/child_process";
// import {PythonShell} from 'python-shell';
// // /home/butmocks / Projects / react2 / Bot / bot7 / node_modules/@types/node/child_process.d.ts

// // const child_python=spawn('python',['hello.py']);

// // child_python.stdout.on('data',(data)=> {
// //     console.log(`stdout :${data}`);
// // })

// // child_python.stderr.on('data',(data)=>{
// //     console.log(`stderr : ${data}`);
// // })

// // child_python.on('close',(code)=>{
// //     console.log(`child process exited with code ${code}`)
// // })




// import { exec } from "node/child_process";
// // const { exec } = require("child_process");

// function runShellScript(script, callback) {
//   exec(script, (error, stdOut, stderr) => {

//     var result = { status: true };

//     if (error) {
//       result.status = false;
//       result.error = error.message;
//     }
//     if (stderr) {
//       result.status = false;
//       result.stderr = stderr;
//     }

//     if (stdOut) {
//       result.result = stdOut;
//     }


//     callback(result);
//   });
// }

// runShellScript("python3 myscript.py >> output.txt", function (res) {
//   console.log(res);
//   fs.readFileSync('output.txt');
// });










// // let { PythonShell } = require('python-shell')

// // function runPy() {
// //   return new Promise(async function (resolve, reject) {
// //     let options = {
// //       mode: 'text',
// //       pythonOptions: ['-u'],
// //       scriptPath: './test.py',//Path to your script
// //       args: [JSON.stringify({ "name": ["xyz", "abc"], "age": ["28", "26"] })]//Approach to send JSON as when I tried 'json' in mode I was getting error.
// //     };

// //     await PythonShell.run('test.py', options, function (err, results) {
// //       //On 'results' we get list of strings of all print done in your py scripts sequentially. 
// //       if (err) throw err;
// //       console.log('results: ');
// //       for (let i of results) {
// //         console.log(i, "---->", typeof i)
// //       }
// //       resolve(results[1])//I returned only JSON(Stringified) out of all string I got from py script
// //     });
// //   })
// // }

// // function runMain() {
// //   return new Promise(async function (resolve, reject) {
// //     let r = await runPy()
// //     console.log(JSON.parse(JSON.stringify(r.toString())), "Done...!@")//Approach to parse string to JSON.
// //   })
// // }

// // console.log(runMain()) //run main function
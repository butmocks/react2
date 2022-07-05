


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import "regenerator-runtime/runtime";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.querySelector('#root');

ReactDOM.render(<App />, rootElement);
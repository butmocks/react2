import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<App />, rootElement);

// import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.scss';
// import App from './App.jsx';
// // import * as ReactDOM from 'react-dom';

// import * as ReactDOMClient from 'react-dom/client';
// // import App from 'App';
// // const container = document.querySelector('#root');

// const container = document.getElementById('app');

// // const rootElement = document.querySelector('#root');

// const root = ReactDOMClient.hydrateRoot(container, <App tab="home" />);

// root.render(<App tab="profile" />);

// // ReactDOM.render(<App />, rootElement);

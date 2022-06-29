import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList';

const rootElement = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5];

// const numberElems = numbers.map(num => <li>{num}</li>);

// const element = <ul>{numberElems}</ul>;

ReactDOM.render(<NumbersList numbers={numbers} />, rootElement);

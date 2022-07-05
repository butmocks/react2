import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Counter from './Counter.jsx';
import Task from './Task'

const rootElement = document.querySelector('#root');
ReactDOM.render(<Task />, rootElement);

ReactDOM.render(<Counter/>, rootElement);

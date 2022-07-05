import StrategyData from './StrategyData.jsx'
import React from 'react';


export default buy = Object.entries(StrategyData);

const template = Object.keys(StrategyData.buy_params).map(item => (
  <span key={StrategyData.buy_params[item].id}>
    {StrategyData.buy_params[item].author} - {StrategyData.buy_params[item].name}
  </span>
));

class Stratagy extends React.Component{
  constructor(props) {
    super(props);

    const buy_params = 

    this.state = {
      
    }
  }
}

// const getCustomersList = obj => {
//   const newObj = { ...obj };
//   const arrArr = Object.entries(newObj);
//   const newArr = [];
//   const objct = {};
//   const id = 'id';
//   arrArr.filter(elem => {
//     objct[id] = elem[0];
//     newArr.push(Object.assign(objct, elem[1]));
//   });
//   newArr.sort((a, b) => {
//     if (a.age > b.age) return 1;
//     if (a.age < b.age) return -1;
//   });
//   return newArr;
// };
// ///   222
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .reduce((acc, elem) => {
//       acc.push({
//         id: elem[0],
//         ...elem[1],
//       });
//       return acc;
//     }, [])
//     .sort((a, b) => {
//       if (a.age > b.age) return 1;
//       if (a.age < b.age) return -1;
//     });
// const customers = {
//   'customer-id-1': {
//     name: 'Willian',
//     age: 54,
//   },
//   'customer-id-2': {
//     name: 'Tom',
//     age: 17,
//   },
// };

// console.log(customers);
// console.log(getCustomersList(customers));
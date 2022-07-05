

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App.jsx';

const take = ['buy_params', 'sell_params', 'minimal_roi']
const strategyData = {
  buy_params: {
    buy_fast_key: 'high',
    buy_horizontal_push: 7,
    buy_slow_key: 'volume',
    buy_vertical_push: 0.942,
  },

  sell_params: {
    sell_fast_key: 'high',
    sell_horizontal_push: 10,
    sell_slow_key: 'low',
    sell_vertical_push: 1.184,
  },

  minimal_roi: {
    0: 0.242,
    13: 0.044,
    51: 0.02,
    170: 0,
  },

  stoploss: -0.271,

  trailing_stop: true,
  trailing_stop_positive: 0.011,
  trailing_stop_positive_offset: 0.054,
  trailing_only_offset_is_reached: false,

  timeframe: '5m',
}

function data(strategyData, take) {
  const isTake = take.includes(strategyData)
}

const baseUrl = 'https://61da71d5ce86530017e3cd56.mockapi.io/api/v1/form';

const buttonElem = document.querySelector('.submit-button');
const inputElem = document.querySelector('.login-form');
const errorElem = document.querySelector('.error-text');

const onValidInput = () => {
  inputElem.reportValidity() ? (buttonElem.disabled = false) : (buttonElem.disabled = true);
};

inputElem.addEventListener('input', onValidInput);

const onSubmitForm = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(inputElem));

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(response => {
      alert(JSON.stringify(response));
      inputElem.reset();
    })
    .catch(() => {
      errorElem.textContent = 'Failed to create user';
    });
};


// const ViewComponent = (props) => (
//   <p>{props.data.text}</p>
// )

// export default ViewComponent;

// const template = Object.keys(StrategyData.buy_params).map(item => /*#__PURE__*/React.createElement("span", {
//   key: StrategyData.buy_params[item].id
// }, StrategyData.buy_params[item].author, " - ", StrategyData.buy_params[item].name));

// const template = Object.keys(StrategyData.buy_params).map(item => (
//   <span key={StrategyData.buy_params[item].id}>
//     {StrategyData.buy_params[item].author} - {StrategyData.buy_params[item].name}
//   </span>
// ));





// class Stratagy extends React.Component {
//   constructor(props) {
//     super(props);

//     const buy_params = (this.state = {});
//   }
// }

console.log(Object.keys(StrategyData.buy_params));
console.log(Object.entries(StrategyData.buy_params))


// let all = Object.entries(StrategyData);
// all[0][0];
// Object.entries(all)
// [0][1][1].buy_fast_key;



// const Data = ({ key, value }) => {
//   return (
//     <li className="data">
//       <span className="data__key">{key}</span>
//       <span className="data__value">{value}</span>
//     </li>
//   );
// };

// export default Data;


// Object.keys(StrategyData.buy_params)
// // 0: "buy_fast_key"
// // 1: "buy_horizontal_push"
// // 2: "buy_slow_key"
// // 3: "buy_vertical_push"

// Object.entries(StrategyData.buy_params);
// // 0: (2) ['buy_fast_key', 'high']
// // 1: (2) ['buy_horizontal_push', 7]
// // 2: (2) ['buy_slow_key', 'volume']
// // 3: (2) ['buy_vertical_push', 0.942]













// const rootElement = document.querySelector('#root');

// ReactDOM.render(<App />, rootElement);




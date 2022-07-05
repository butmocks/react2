import React from 'react';
// import DataList from './DataList.jsx';
// import StrategyData from './StrategyData.jsx';

let strategyData = {
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
};

// const App = strategyData =>
//   Object.entries(strategyData)
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


// console.log(App)


// const App = Object.keys(StrategyData.buy_params).map(item => (
//   <span key={StrategyData.buy_params[item].id}>
//     {StrategyData.buy_params[item].author} - {StrategyData.buy_params[item].name}
//   </span>
// ));

// const App = () => {
//   return (
//     <>

//     </>
//   );
// };

export default App;

// const App = () => {
//   return (
//     <>
//       <DataList />
//     </>
//   );
// };

// export default App;

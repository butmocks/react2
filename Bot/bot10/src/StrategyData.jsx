
let StrategyData = {
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
export default StrategyData;

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


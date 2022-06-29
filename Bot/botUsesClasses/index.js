import Diamond from "./diamond";


  console.log(Diamond);




// import React, { Component } from 'react';
// class Diamond extends IStrategy {
//   populate_indicators(dataframe, metadata) {
//     return dataframe;
//   }

//   populate_buy_trend(dataframe, metadata) {
//     var conditions;
//     conditions = [];
//     conditions.append(qtpylib.crossed_above(dataframe[this.buy_fast_key.value].shift(this.buy_horizontal_push.value), dataframe[this.buy_slow_key.value] * this.buy_vertical_push.value));

//     if (conditions) {
//       dataframe.loc[[reduce((x, y) => {
//         return x & y;
//       }, conditions), "buy"]] = 1;
//     }

//     return dataframe;
//   }

//   populate_sell_trend(dataframe, metadata) {
//     var conditions;
//     conditions = [];
//     conditions.append(qtpylib.crossed_below(dataframe[this.sell_fast_key.value].shift(this.sell_horizontal_push.value), dataframe[this.sell_slow_key.value] * this.sell_vertical_push.value));

//     if (conditions) {
//       dataframe.loc[[reduce((x, y) => {
//         return x & y;
//       }, conditions), "sell"]] = 1;
//     }

//     return dataframe;
//   }

// }


// // class Counter extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       counter: 0,
// //     };

// //     this.decrement = this.decrement.bind(this);
// //   }

// //   decrement() {
// //     this.setState({
// //       counter: this.state.counter - 1,
// //     });
// //   }

// //   increment = () => {
// //     this.setState({
// //       counter: this.state.counter + 1,
// //     });
// //   };

// //   reset() {
// //     this.setState({
// //       counter: 0,
// //     });
// //   }



//   import React from 'react';
// import moment from 'moment';

// const Greeting = props => {
//   console.log(props);

//   const yearsOld = moment(new Date()).diff(moment(props.birthDate), 'years');
//   console.log(yearsOld);

//   return (
//     <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${yearsOld} years old`}</div>
//   );
// };

// export default Greeting;

// class Diamond extends IStrategy {
//   populate_indicators(dataframe, metadata) {
//     return dataframe;
//   }

//   populate_buy_trend(dataframe, metadata) {
//     var conditions;
//     conditions = [];
//     conditions.append(qtpylib.crossed_above(dataframe[this.buy_fast_key.value].shift(this.buy_horizontal_push.value), dataframe[this.buy_slow_key.value] * this.buy_vertical_push.value));

//     if (conditions) {
//       dataframe.loc[[reduce((x, y) => {
//         return x & y;
//       }, conditions), "buy"]] = 1;
//     }

//     return dataframe;
//   }

//   populate_sell_trend(dataframe, metadata) {
//     var conditions;
//     conditions = [];
//     conditions.append(qtpylib.crossed_below(dataframe[this.sell_fast_key.value].shift(this.sell_horizontal_push.value), dataframe[this.sell_slow_key.value] * this.sell_vertical_push.value));

//     if (conditions) {
//       dataframe.loc[[reduce((x, y) => {
//         return x & y;
//       }, conditions), "sell"]] = 1;
//     }

//     return dataframe;
//   }

// }

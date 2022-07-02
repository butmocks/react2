import React, { Component } from 'react';
import Numbers from './Numbers.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';

class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app">
        <Numbers title="All numbers" number={this.state.number} />
        <EvenNumbers title="Even numbers" number={this.state.number} />
        <OddNumbers title="Odd numbers" number={this.state.number} />
        <Numbers title="Just 17" number={17} />
      </div>
    );
  }
}

export default App

// <div class="app">
//   <!-- OddNumbers -->
//   <div class="number">
//     <span class="number__title">Odd number</span>
//     <span class="number__value">83</span>
//   </div>
//   <!-- EvenNumbers -->
//   <div class="number">
//     <span class="number__title">Even number</span>
//     <span class="number__value">82</span>
//   </div>
//   <!-- Numbers -->
//   <div class="number">
//     <span class="number__title">All numbers</span>
//     <span class="number__value">83</span>
//   </div>
//   <!-- Numbers -->
//   <div class="number">
//     <span class="number__title">Just 17</span>
//     <span class="number__value">17</span>
//   </div>
// </div>

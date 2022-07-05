import React from 'react';
// import DataList from './DataList.jsx';
import StrategyData from './StrategyData.jsx';

const template = Object.keys(StrategyData.buy_params).map(item => (
  <span key={StrategyData.buy_params[item].id}>
    {StrategyData.buy_params[item].author} - {StrategyData.buy_params[item].name}
  </span>
));


const App = () => {
  return (
    <>
      <DataList />
    </>
  );
};

export default App;

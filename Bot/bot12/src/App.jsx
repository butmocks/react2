import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SellParams from './SellParams.jsx';
import MinimalRoi from './MinimalRoi.jsx';
import PageNotFound from './PageNotFound.jsx';
import BuyParams from './BuyParams.jsx';
import StopLoss from './StopLoss.jsx'
import TrailingStop from './TrailingStop.jsx';
import Timeframe from './Timeframe.jsx';
import SetDefault from './SetDefault.jsx';

const App = () => {
  return (
    <div className="page">
      <ul>
        <BuyParams />
        <SellParams />
        <MinimalRoi />
        <StopLoss />
        <TrailingStop />
        <Timeframe />
        <SetDefault />
      </ul>

      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
};

export default App;

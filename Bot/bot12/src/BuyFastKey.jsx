import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import React from 'react';
import { useState } from 'react';


  const buy_fast_key = ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'];
  const defaultOption = buy_fast_key[1];



const BuyFastKey = () => {
  const buy_fast_key = ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'];
const defaultOption = buy_fast_key[1];
  return (

<Dropdown
  buy_fast_key={buy_fast_key}
  onChange={this._onSelect}
  value={defaultOption}
  placeholder="Select an option"
/>
  );
};

export default BuyFastKey;
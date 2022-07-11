// import React from 'react';
// import { Picker } from 'react-native';
// import PropTypes from 'prop-types';
// import React, { Picker } from 'react';
// import { Link } from 'react-router-dom';
// import Dropdown from 'react-dropdown';
import * as ReactDOMClient from 'react-dom/client';
import ReactDropdown from 'react-dropdown';
import PageNotFound from './PageNotFound';
import React, { useState } from 'react';

const BuyParams = () => {
  const options = ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'];

  const [value, setValue] = useState('high');

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <div className="page__content">
      <h2>Buy Params</h2>
      <label>
        Buy fast key
        <select value={value} onChange={handleChange}>
          {options.map(option => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </label>

      <li>Buy horizontal push</li>

      <label>
        Buy slow key
        <select value={value} onChange={handleChange}>
          {options.map(option => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </label>

      <li>Buy slow key</li>
      <li>Buy vertical push</li>

      {/* <Link to="/contacts">Contacts</Link> */}
    </div>
  );
};

export default BuyParams;

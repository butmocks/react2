import { useState } from 'react';
import { Picker } from 'react-native';

// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// const options = ['one', 'two', 'three'];
// const defaultOption = options[0];
// <Dropdown
//   options={options}
//   onChange={this._onSelect}
//   value={defaultOption}
//   placeholder="Select an option"
// />;

// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// const buy_fast_key = ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'];
// const defaultOption = buy_fast_key[1];
// <Dropdown
//   buy_fast_key={buy_fast_key}
//   onChange={this._onSelect}
//   value={defaultOption}
//   placeholder="Select an option"
// />;

const [buyFastValue, setBuyFastValue] = useState('high');
const [buy_fast_key] = useState(
  ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow']
  .sort(),
);
      <Picker
        style={{ marginVertical: 10 }}
        selectedValue={buyFastValue}
        onValueChange={itemVal => {
          setBuyFastValue(itemVal);
        }}
      >
        {buy_fast_key.map(l => (
          <Picker.Item label={l} value={l} />
        ))}
      </Picker>;

console.log(buy_fast_key);


const [sellFastValue, setSellFastValue] = useState('high');
const [sell_fast_key] = useState(
  ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow']
  .sort(),
);

const [buySlowValue, setBuySlowValue] = useState('volume');
const [buy_slow_key] = useState(
  ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'].sort(),
);

const [sellSlowValue, setSellSlowValue] = useState('low');
const [sell_slow_key] = useState(
  ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'].sort(),
);


const buy_vertical_push = DecimalParameter(0.5, 1.5);
const buy_horizontal_push = IntParameter(0, 10);

const sell_vertical_push = DecimalParameter(0.5, 1.5);
const sell_horizontal_push = IntParameter(0, 10);


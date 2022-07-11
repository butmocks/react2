// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Picker } from 'react-native';

const PageNotFound = () => {
  const [buyFastValue, setBuyFastValue] = useState('high');
const [buy_fast_key] = useState(
  ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow']
  .sort(),
);
  return (

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
      </Picker>
  );
};

export default PageNotFound;

const buy_vertical_push = DecimalParameter(0.5, 1.5);
const buy_horizontal_push = IntParameter(0, 10);
const buy_fast_key = CategoricalParameter([
  'open',
  'high',
  'low',
  'close',
  'volume',
  'ma_fast',
  'ma_slow',
]);
const buy_slow_key = CategoricalParameter([
  'open',
  'high',
  'low',
  'close',
  'volume',
  'ma_fast',
  'ma_slow',
]);
const sell_vertical_push = DecimalParameter(0.5, 1.5);
const sell_horizontal_push = IntParameter(0, 10);
const sell_fast_key = CategoricalParameter([
  'open',
  'high',
  'low',
  'close',
  'volume',
  'ma_fast',
  'ma_slow',
]);
const sell_slow_key = CategoricalParameter([
  'open',
  'high',
  'low',
  'close',
  'volume',
  'ma_fast',
  'ma_slow',
]);

import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select name="buy_fast_key" ref={register({ required: true })}>
        <option value="open">open</option>
        <option value="high">high</option>
        <option value="low">low</option>
        <option value="close">close</option>
        <option value="volume">volume</option>
      </select>
      <select name="buy_horizontal_push" ref={register({ required: true })}>
        <option value="0,1,2,3,4,5,6,7,8,9,10">0,1,2,3,4,5,6,7,8,9,10</option>
      </select>
      <select name="buy_slow_key" ref={register({ required: true })}>
        <option value="open, high, low, close, volume">open, high, low, close, volume</option>
      </select>
      <select name="buy_vertical_push" ref={register}>
        <option value="0.5-1.5">0.5-1.5</option>
      </select>
      <select name="sell_fast_key" ref={register({ required: true })}>
        <option value="open, high, low, close, volume">open, high, low, close, volume</option>
      </select>
      <select name="sell_horizontal_push" ref={register({ required: true })}>
        <option value="0,1,2,3,4,5,6,7,8,9,10">0,1,2,3,4,5,6,7,8,9,10</option>
      </select>
      <select name="sell_slow_key" ref={register}>
        <option value="open">open</option>
        <option value="high">high</option>
        <option value="low">low</option>
        <option value="close">close</option>
        <option value="volume">volume</option>
      </select>
      <select name="sell_vertical_push" ref={register}>
        <option value="0.5-1.5">0.5-1.5</option>
      </select>



      
      <input type="range" placeholder="minimal_roi" name="minimal_roi" ref={register({ max: 0, min: 1 }) />
        <input type="number" placeholder="stoploss" name="stoploss" ref={register({}) />

      <input name="trailing_stop" ref={register} type="radio" value="true" />
      <input name="trailing_stop" ref={register} type="radio" value="false" />
      <input type="number" placeholder="trailing_stop_positive" name="trailing_stop_positive" ref={register({}) />
      <input type="number" placeholder="trailing_stop_positive_offset" name="trailing_stop_positive_offset" ref={register({}) />

      <input name="trailing_only_offset_is_reached" ref={register} type="radio" value="true" />
      <input name="trailing_only_offset_is_reached" ref={register} type="radio" value="false" />
      <input type="number" placeholder="timeframe" name="timeframe" ref={register({}) />

      <input type="submit" />
    </form>
  );
}
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
        <option value=" high"> high</option>
        <option value=" low"> low</option>
        <option value=" close"> close</option>
        <option value=" volume"> volume</option>
      </select>
      <input type="number" placeholder="buy_horizontal_push" name="buy_horizontal_push" ref={register({required: true, max: 10, min: 0, maxLength: 10, pattern: /7/i}) />
      <select name="buy_slow_key" ref={register({ required: true })}>
        <option value="open">open</option>
        <option value=" high"> high</option>
        <option value=" low"> low</option>
        <option value=" close"> close</option>
        <option value=" volume"> volume</option>
      </select>
      <input type="number" placeholder="buy_vertical_push" name="buy_vertical_push" ref={register({required: true, max: 3, min: 0, maxLength: 1, pattern: /0.942/i}) />
      <select name="sell_fast_key" ref={register({ required: true })}>
        <option value="open">open</option>
        <option value=" high"> high</option>
        <option value=" low"> low</option>
        <option value=" close"> close</option>
        <option value=" volume"> volume</option>
      </select>
      <input type="number" placeholder="sell_horizontal_push" name="sell_horizontal_push" ref={register({max: 10, min: -3, pattern: /10/i}) />
      <select name="sell_slow_key" ref={register}>
        <option value="open">open</option>
        <option value=" high"> high</option>
        <option value=" low"> low</option>
        <option value=" close"> close</option>
        <option value=" volume"> volume</option>
      </select>
      <input type="number" placeholder="sell_vertical_push" name="sell_vertical_push" ref={register({required: true, max: 2, min: 0, pattern: /1.184/i}) />
      <input type="number" placeholder="minimal_roi "0"" name="minimal_roi "0"" ref={register({pattern: /0.242/i}) />
      <input type="number" placeholder="minimal_roi"13"" name="minimal_roi"13"" ref={register({pattern: /0.044/i}) />
      <input type="number" placeholder="minimal_roi"51"" name="minimal_roi"51"" ref={register({}) />
      <input type="number" placeholder="minimal_roi"170"" name="minimal_roi"170"" ref={register({}) />
      <input type="number" placeholder="stoploss" name="stoploss" ref={register({pattern: /-0.271/i}) />

      <input name="trailing_stop" ref={register({ required: true })} type="radio" value="True" />
      <input name="trailing_stop" ref={register({ required: true })} type="radio" value="False" />
      <input type="number" placeholder="trailing_stop_positive" name="trailing_stop_positive" ref={register({required: true, pattern: /0.011/i}) />
      <input type="number" placeholder="trailing_stop_positive_offset" name="trailing_stop_positive_offset" ref={register({required: true, pattern: /0.054/i}) />

      <input name="trailing_only_offset_is_reached" ref={register} type="radio" value="True" />
      <input name="trailing_only_offset_is_reached" ref={register} type="radio" value="False" />
      <input type="time" placeholder="timeframe" name="timeframe" ref={register({required: true, max: 15, min: 1, pattern: /5/i}) />

      <input type="submit" />
    </form>
  );
}
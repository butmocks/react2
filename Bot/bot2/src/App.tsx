import React from 'react';
import { Router, Link, RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import type { PLACEMENT } from '@hookform/devtools';
import './App.css';

const App = () => {
  // export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <select name="buy_slow_key" ref={register({ required: true })}>
        <option value="open">open</option>
        <option value="high">high</option>
        <option value="low">low</option>
        <option value="close">close</option>
        <option value="volume">volume</option>
      </select>
      <select name="buy_vertical_push" ref={register}>
        <option value="0.5-1.5">0.5-1.5</option>
      </select>
      <select name="sell_fast_key" ref={register({ required: true })}>
        <option value="open">open</option>
        <option value="high">high</option>
        <option value="low">low</option>
        <option value="close">close</option>
        <option value="volume">volume</option>
      </select>
      <select name="sell_horizontal_push" ref={register({ required: true })}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
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
      <input
        type="text"
        placeholder="minimal_roi"
        name="minimal_roi"
        ref={register({ required: true, max: 1, min: 0 })}
      />
      <textarea name="stoploss" ref={register({})} />
      <select name="trailing_stop" ref={register}>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <input
        type="number"
        placeholder="trailing_stop_positive"
        name="trailing_stop_positive"
        ref={register({})}
      />
      <input
        type="number"
        placeholder="trailing_stop_positive_offset"
        name="trailing_stop_positive_offset"
        ref={register({})}
      />

      <input name="trailing_only_offset_is_reached" ref={register} type="radio" value="true" />
      <input name="trailing_only_offset_is_reached" ref={register} type="radio" value="false" />
      <input type="number" placeholder="timeframe" name="timeframe" ref={register({})} />

      <input type="submit" />
    </form>
  );
};
export default App;

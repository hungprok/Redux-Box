import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Box from './Box';

function App() {
  let count = useSelector(state => state.count);
  let color = useSelector(state => state.color);
  let box = useSelector(state => state.box);

  let dispatch = useDispatch();
  let increase = () => {
    dispatch({ type: 'INCREMENT', payload: { id: count, color: color } });
  }

  let decrease = () => {
    dispatch({ type: 'DECREMENT' });

  }

  let reset = () => {
    dispatch({ type: 'RESET' });
  }

  let colorAll = (value) => {
    dispatch({ type: 'COLOR', payload: value });
  }

  let keyPressed = (e) => {
    if (e.key === "Enter") {
      colorAll(e.target.value)
    };
    console.log(e.target.value);
  }

  let render = () => {
    return box && box.map((item,index) => <Box item={item} index={index} />)
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => increase()}>increase</button>
      <button onClick={() => decrease()}>decrease</button>
      <button onClick={() => reset()}>reset</button>
      <input onKeyPress={(e) => keyPressed(e)} type="text" name="" id="" />
      {render()}    
      </div>
  );
}

export default App;

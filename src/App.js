import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  let count = useSelector(state => state.count);
  let color = useSelector(state => state.color);
  let box = useSelector(state => state.box);
  let status = true;

  // let render = () => {
  //   html = box.map((item) => {
  //     return <div style={{ width: '100px', height: '100px', backgroundColor: `${item.color}` }}>box
  // <input onKeyPress={(e) => keyPressed2(e, item.id)} type="text" />
  //     </div>
  //   })
  // }

  let html = box.map((item) => {
    return <div style={{ width: '161px', height: '100px', backgroundColor: `${item.color}`, margin:'10px', border:'black solid 1px' }}>box {item.id+1}
<input onKeyPress={(e) => keyPressed2(e, item.id)} type="text" />
    </div>
  })

  let dispatch = useDispatch();
  let increase = () => {
    dispatch({ type: 'INCREMENT', payload: { id: count, color: color } });
    // status = !status;
  }

  let decrease = () => {
    dispatch({ type: 'DECREMENT' });

  }

  let reset = () => {
    dispatch({ type: 'RESET' });
    // status = !status;
  }

  let colorAll = (value) => {
    dispatch({ type: 'COLOR', payload: value });
    // status = !status;
  }

  let colorEach = (value, id) => {
    dispatch({ type: 'COLOREACH', payload: { color: value, id: id } });
    // status = !status;
  }

  let keyPressed = (e) => {
    if (e.key === "Enter") {
      colorAll(e.target.value)
    };
    console.log(e.target.value);
    // status = !status;
  }

  let keyPressed2 = (e, id) => {
    if (e.key === "Enter") {
      colorEach(e.target.value, id);

    };
    console.log(e.target.value);
    console.log(id);
    // status = !status;
  }

  // useEffect(render, [status])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => increase()}>increase</button>
      <button onClick={() => decrease()}>decrease</button>
      <button onClick={() => reset()}>reset</button>
      <input onKeyPress={(e) => keyPressed(e)} type="text" name="" id="" />
      {html}
    </div>
  );
}

export default App;

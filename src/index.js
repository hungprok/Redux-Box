import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

let State = {
  count: 0,
  color: 'red',
  box: []
}

function Reducer(state = State, action) {
  if (action.type === 'INCREMENT') {
    state.count++;
    state.box.push(action.payload)
    console.log(state.box)
  };
  if (action.type === 'DECREMENT') {
    state.count--;
    state.box.pop();
  };
  if (action.type === 'RESET' || state.count < 0) {
    state.count =0;
    state.box = []
  };

  if (action.type === 'COLOR') {
    state.color = action.payload;
    console.log('color works', action.payload);
    state.box.map((item)=>{
      item.color = action.payload
    })
  };

  if (action.type === 'COLOREACH') {
    
    console.log('color works', action.payload);
    
    state.box[action.payload.id].color = action.payload.color;
    console.log('box', state.box);
  };
  return state
}

let store = createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

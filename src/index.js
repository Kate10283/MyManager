import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './reset.css';
import { getData } from "./store/actions";
import { store } from "./store";

store.dispatch(getData());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

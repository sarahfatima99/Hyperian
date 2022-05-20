import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "react-modal";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux'
import allReducer from './reducer';
import { Provider } from 'react-redux';

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

Modal.setAppElement("#root");
ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);



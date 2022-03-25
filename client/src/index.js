import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "react-modal";
import App from './App';
import { BrowserRouter} from 'react-router-dom';
Modal.setAppElement("#root");
ReactDOM.render(
  <BrowserRouter>
 <App/>
 </BrowserRouter>,

  document.getElementById('root')
);



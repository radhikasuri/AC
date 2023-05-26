import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from './store';
import Contextprovider from "./components/context/ContextProvider";

ReactDOM.render(
  <Contextprovider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
     </Provider>
   </Contextprovider>
  ,
  document.getElementById('root')
);
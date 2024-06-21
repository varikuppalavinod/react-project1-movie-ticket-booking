import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import "./Index.css"
import {Cartprovider} from "./components/cartprovider" 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Cartprovider>
    <App />
  </Cartprovider>
);

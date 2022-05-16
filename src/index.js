import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header ,ButtonSec} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ButtonSec/>
  </React.StrictMode>
);


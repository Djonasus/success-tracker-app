import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './screens/MainScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trial from './Components/Trial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/trial" element={<Trial />} />
    </Routes>
  </BrowserRouter>


);

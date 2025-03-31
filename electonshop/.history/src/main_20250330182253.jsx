import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import SingleProductPage from './pages/SingleProductPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="singleProductPage/:productId" element={<SingleProductPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

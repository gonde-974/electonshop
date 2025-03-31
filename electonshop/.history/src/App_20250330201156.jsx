import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import CategoryComponents from './components/CategoryComponents';
import SingleProductPage from './components/SingleProductPage';
import HomePage from './components/HomePage'; // Страница за почетна
import axios from 'axios';

// Поставување на базната URL адреса за axios
axios.defaults.baseURL = 'https://dummyjson.com';

function App() {
  const [menuCategoryOpen, setMenuCategoryOpen] = useState(false);

  return (
    <div className="relative">
      <NavBarComponent />
      <CategoryComponents setMenuCategoryOpen={setMenuCategoryOpen} />
      
      {/* Ова овозможува рутите од Router да се вчитуваат правилно */}
      <Router>
        <Routes>
          {/* Почетната страница */}
          <Route path="/" element={<HomePage />} />

          {/* Страница за производи */}
          <Route path="/singleProductPage/:productId" element={<SingleProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

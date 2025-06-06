import { useState } from 'react';
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import { Outlet } from 'react-router-dom';
import CategoryComponents from './components/CategoryComponents';

import axios from 'axios';



// Поставување на базната URL адреса за axios
axios.defaults.baseURL = 'https://dummyjson.com';

function App() {
  const [menuCategoryOpen, setMenuCategoryOpen] = useState(false);

  return (
    <div className="relative">
      <NavBarComponent />
      {/* Компонентата за категории ќе ги контролира и ќе ги прикажува категориите како overlay */}
      <CategoryComponents setMenuCategoryOpen={setMenuCategoryOpen} />
      
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singleProductPage/:productId" element={<SingleProductPage />} />
      </Routes>
    </Router>
      
      <Outlet />
    </div>
  );
}

export default App;

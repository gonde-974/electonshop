import { useState } from 'react';
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import { Outlet } from 'react-router-dom';
import CategoryComponents from './components/CategoryComponents';

import axios from 'axios';
import SingleProductPage from './pages/SingleProductPage';


// Поставување на базната URL адреса за axios
axios.defaults.baseURL = 'https://dummyjson.com';

function App() {
  const [menuCategoryOpen, setMenuCategoryOpen] = useState(false);

  return (
    <div className="relative">
      <NavBarComponent />
      <SingleProductPage />
      {/* Компонентата за категории ќе ги контролира и ќе ги прикажува категориите како overlay */}
      <CategoryComponents setMenuCategoryOpen={setMenuCategoryOpen} />
      
      
      <Outlet />
    </div>
  );
}

export default App;

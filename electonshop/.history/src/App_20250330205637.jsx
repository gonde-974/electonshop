import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import CategoryComponents from './components/CategoryComponents';
import axios from 'axios';

// Поставување на базната URL адреса за axios
axios.defaults.baseURL = 'https://dummyjson.com';

function App() {
  const [menuCategoryOpen, setMenuCategoryOpen] = useState(false);

  return (
    <div className="relative">
      <NavBarComponent />
      
      {/* Ова овозможува рутите од Router да се вчитуваат правилно */}
      <Outlet />
      <CategoryComponents />
    </div>
  );
}

export default App;

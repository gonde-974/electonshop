import { useState } from 'react';
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import CategoryComponents from './components/CategoryComponents';

axios.defaults.baseURL = 'https://dummyjson.com';

function App() {
  const [menuCategoryOpen, setMenuCategoryOpen] = useState(false);

  return (
    <>
      <div>
        <NavBarComponent setMenuCategoryOpen={setMenuCategoryOpen}/>
        
        {menuCategoryOpen && <Outlet />}
      </div>
    </>
  );
}

export default App;

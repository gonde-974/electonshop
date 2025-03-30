import { useState } from 'react';
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import { Outlet } from 'react-router-dom';
import CategoryComponents from './components/CategoryComponents';

import axios from 'axios';

// axios
axios.defaults.baseURL = 'https://dummyjson.com';


function App() {
  const [menuCategoryOpen, setMenuCategoryOpen] = useState(false);

  return (
    <>
      <div>
        <NavBarComponent />
        {/* Прикажуваме CategoryComponents кога менито е отворено */}
        <CategoryComponents setMenuCategoryOpen={setMenuCategoryOpen} />
        
        {/* Ако менито не е отворено, се прикажува почетната страница */}
        {!menuCategoryOpen && <Outlet />}
      </div>
    </>
  );
}

export default App;

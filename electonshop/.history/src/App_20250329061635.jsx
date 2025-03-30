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
        <NavBarComponent />
        {/* Кога менито е отворено, се прикажува CategoryComponents */}
        <CategoryComponents setMenuCategoryOpen={setMenuCategoryOpen} />
        
        {/* Ако менито не е отворено, се прикажува Outlet */}
        {!menuCategoryOpen && <Outlet />}
      </div>
    </>
  );
}

export default App;

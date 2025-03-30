import { Outlet } from 'react-router-dom';

function App() {
  const [menuCategoryOpen, setMenuCategoryOpen] = useState(false);

  return (
    <>
      <div>
        <NavBarComponent />
        {/* Прикажување на компонентата CategoryComponents кога менито е отворено */}
        <CategoryComponents setMenuCategoryOpen={setMenuCategoryOpen} />
        
        {/* Ако менито не е отворено, се прикажува почетната страница */}
        {!menuCategoryOpen && <Outlet />}
      </div>
    </>
  );
}

export default App;

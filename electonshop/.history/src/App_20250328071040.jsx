import { useState } from 'react'

import './App.css'
import NavBarComponent from './components/NavBarComponent'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import CategoryComponents from './components/CategoryComponents'

// axios
axios.defaults.baseURL = 'https://dummyjson.com'

function App() {

  const [showCategories, setShowCategories] = useState(false)  

  return (
    <>
     <div>
      <NavBarComponent />
      {!showCategories && <HomeComponent />}
      <CategoryComponents setShowCategories={setShowCategories} />
      <Outlet />
     </div>
     
       
    </>
  )
}

export default App

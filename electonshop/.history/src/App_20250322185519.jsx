import { useState } from 'react'

import './App.css'
import NavBarComponent from './components/NavBarComponent'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

// axios
axios.defaults.baseURL = 'https://dummyjson.com'

function App() {
  

  return (
    <>
     <div>
      <NavBarComponent />
      <Outlet />
     </div>
     
       
    </>
  )
}

export default App

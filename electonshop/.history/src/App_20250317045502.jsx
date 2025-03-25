import { useState } from 'react'

import './App.css'
import NavBarComponent from './components/NavBarComponent'
import { Outlet } from 'react-router-dom'

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

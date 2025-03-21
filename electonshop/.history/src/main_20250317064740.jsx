import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import SingleProductPage from './pages/SingleProductPage.jsx'
import CartPage from './pages/CartPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

//Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/productPag', element: <ProductPage /> },
      { path: '/singleProductPage/:productId', element: <SingleProductPage /> },       
      { path: '/cart', element: <CartPage /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <RouterProvider router={router}/>
  </StrictMode>
)

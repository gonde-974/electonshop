import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import SingleProductPage from './pages/SingleProductPage.jsx'
import CategoryProductList from './pages/CategoryProductList.jsx'
import CartPage from './pages/CartPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import FavoritePage from './pages/FavoritePage.jsx'

// IMPORT PAGES
import { ClerkProvider } from '@clerk/clerk-react'

// PROVIDER REDUX
import { Provider } from 'react-redux'

// IMPORT STORE
import store from './store/store.js'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> }, // Само домашната страница кога си на '/'
      {
        path: '/productPage',
        element: <ProductPage />
      },
      {
        path: '/singleProductPage/:productId',
        element: <SingleProductPage />
      },
      { path: '/cart', 
        element: <CartPage />
      },
      {
        path:'/favorite',
        element:<FavoritePage />
      },
      {
        path: '/category/:id',
        element: <CategoryProductList />
      }
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>
  </StrictMode>
)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import LoginPage from './pages/Login';
import './index.css';
import RegisterPage from './pages/Register';
import ProductsPage from './pages/Products';
import ProfilePage from './pages/Profile.jsx';
import DetailProductPage from './pages/DetailProduct.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Navbar from './components/Layout/Navbar.jsx';
import { DarkModeContextProvider } from './context/DarkMode.jsx'; 
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <ProductsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>
);

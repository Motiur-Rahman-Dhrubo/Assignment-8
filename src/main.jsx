import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Faq from './components/Faq/Faq';
import Statistics from './components/Statistics/Statistics';
import GadgetDetails from './components/GadgetDetails/GadgetDetails';
import Cart from './components/Cart/Cart';
import WishList from './components/WishList/WishList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('/gadgets.json'),
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/",
            element: <Cart></Cart>
          },
          {
            path: "/dashboard/wishlist",
            element: <WishList></WishList>
          }
        ]
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
        loader: () => fetch('/faqs.json'),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/product/:productId",
        element: <GadgetDetails></GadgetDetails>,
        loader: ({ params }) => fetch('/gadgets.json')
        .then(response => response.json())
        .then(gadgets => gadgets.find(item => item.product_id === parseInt(params.productId)))
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

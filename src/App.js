
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import About from './Component/about/About';
import Shop from './Component/Shop/Shop';
import Orders from './Component/Orders/Orders';
import Inventory from './Component/Inventory/Inventory';
import { ProductsAndCartLoader } from './loaders/ProductsAndCartLoader';


function App() {
  const router=createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        loader:()=>fetch('products.json'),
        element: <Shop></Shop>
      },
      {
        path:'/orders',
        loader:ProductsAndCartLoader,
        element: <Orders></Orders>
      },
      {
        path:'/inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'/about',
        element: <About></About>
      }
    ]
  },
  
  ])
  return (
    <div >
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

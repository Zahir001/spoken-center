import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css'
import './sidebar.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx';
import Product from './routes/Product.jsx';
import Income from './routes/Income.jsx';
import Customers from './routes/Customers.jsx';
import Promote from './routes/Promote.jsx';
import Help from './routes/Help.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/product', element: <Product /> },
      { path: '/income', element: <Income /> },
      { path: '/customer', element: <Customers /> },
      { path: '/promote', element: <Promote /> },
      { path: '/help', element: <Help /> }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

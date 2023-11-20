
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/Home/Home'
import Men from './pages/Men/Men'
import Women from './pages/Women/Women'
import Cart from './pages/Cart/Cart'
import Error from './pages/Error/Error'
import Contact from './pages/Contact/Contact.jsx';

import './index.css'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/men',
        element: <Men />
      },
      {
        path: '/women',
        element: <Women />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)

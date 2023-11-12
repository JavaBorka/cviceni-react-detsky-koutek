import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import Homepage from './pages/Homepage/index.jsx'
import About from './pages/About/index.jsx'
import Contact from './pages/Contact/index.jsx'
import ErrorPage from './pages/ErrorPage/index.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: 'aboutUs',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
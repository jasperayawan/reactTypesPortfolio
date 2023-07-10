import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './components/Hero.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

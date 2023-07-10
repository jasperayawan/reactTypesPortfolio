import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Project from './components/Project.tsx'
import Contact from './components/Contact.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/project',
        element: <Project/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import CareerOpportunities from './pages/CareerOpportunities.jsx'
import StudyAbroad from './pages/StudyAbroad.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/gioi-thieu',
        element: <About />
      },
      {
        path: '/co-hoi-viec-lam',
        element: <CareerOpportunities />
      },
      {
        path: '/tu-van-du-hoc',
        element: <StudyAbroad />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


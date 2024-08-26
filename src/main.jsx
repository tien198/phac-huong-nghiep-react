import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

// components
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import CareerOpportunities from './pages/CareerOpportunities.jsx'
import StudyAbroad from './pages/StudyAbroad.jsx'
import ProgramsList from './pages/ProgramsList.jsx'
import ProgramDetail from './pages/ProgramDetail.jsx'
import News from './pages/News.jsx'

// data
import { programsLoader, programDetailLoader, newsListLoader } from './ultilities/data.js'

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
        path: '/tin-tuc',
        element: <News />,
        loader: newsListLoader
      },
      {
        path: '/tin-tuc/:id',
        element: <ProgramDetail />,
        loader: programDetailLoader
      },
      {
        path: '/co-hoi-viec-lam',
        element: <CareerOpportunities />
      },
      {
        path: '/tu-van-du-hoc',
        element: <StudyAbroad />
      },
      {
        path: '/:kindOfProgram/:country',
        element: <ProgramsList />,
        loader: programsLoader
      },
      {
        path: '/:kindOfProgram/:country/:id',
        element: <ProgramDetail />,
        loader: programDetailLoader
      },
      {
        path: '/:kindOfProgram/:id',
        element: <ProgramDetail />,
        loader: programDetailLoader
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


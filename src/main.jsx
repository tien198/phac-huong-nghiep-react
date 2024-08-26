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
import ProgramsList from './pages/ProgramsList.jsx'
import ProgramDetail from './pages/ProgramDetail.jsx'
import ProgramCategory from './pages/ProgramCategory'
import News from './pages/News.jsx'

// data
import { about, laborExport, admission, news, contact } from '../data/conventions/urlList.json'
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
        path: `/${about.url}`,
        element: <About />
      },
      {
        path: `/${news.url}`,
        element: <News />,
        loader: newsListLoader
      },
      {
        path: `/${news.url}/:id`,
        element: <ProgramDetail />,
        loader: programDetailLoader
      },
      {
        path: `/:kindOfProgram`,
        element: <ProgramCategory />
      },
      // {
      //   path: `/${admission.url}`,
      //   element: <StudyAbroad />
      // },
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


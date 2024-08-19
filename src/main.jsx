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
import ProgramsList from './pages/ProgramsList.jsx'

// data
import { laborExportProgramsLoader, laborExportProgramDetailLoader, admissionsProgramsLoader, admissionnProgramDetailLoader, homeLoader, careerOpportunities, studyAbroad } from './ultilities/data.js'
import ProgramDetail from './pages/ProgramDetail.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
        loader: homeLoader
      },
      {
        path: '/gioi-thieu',
        element: <About />
      },
      {
        path: '/co-hoi-viec-lam',
        element: <CareerOpportunities />,
        loader: careerOpportunities
      },
      {
        path: '/tu-van-du-hoc',
        element: <StudyAbroad />,
        loader: studyAbroad
      },
      {
        path: '/co-hoi-viec-lam/:country',
        element: <ProgramsList kindOfProgram='co-hoi-viec-lam' />,
        loader: laborExportProgramsLoader
      },
      {
        path: '/co-hoi-viec-lam/:country/:id',
        element: <ProgramDetail />,
        loader: laborExportProgramDetailLoader
      },
      {
        path: '/tu-van-du-hoc/:country',
        element: <ProgramsList kindOfProgram='tu-van-du-hoc' />,
        loader:  admissionsProgramsLoader
      },
      {
        path: '/tu-van-du-hoc/:country/:id',
        element: <ProgramDetail />,
        loader:  admissionnProgramDetailLoader
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


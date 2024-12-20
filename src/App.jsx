import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// components
import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ProgramsList from './pages/ProgramsList.jsx'
import ProgramDetail from './pages/ProgramDetail.jsx'
import ProgramCategory from './pages/ProgramCategory'
import News, { newsListLoader } from './pages/News.jsx'

// data
import {
  about,
  laborExport,
  admission,
  news,
  contact
} from './ulti/convensions/urlList.json'
import { programsLoader, programDetailLoader } from './ulti/data.js'
import NewsRoot from './pages/NewsRoot.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: about.url,
        element: <About />
      },
      {
        path: `${news.url}`,
        element: <NewsRoot />,
        children: [
          {
            index: true,
            element: <News />,
            loader: newsListLoader
          },
          {
            path: ':id',
            element: <ProgramDetail />,
            loader: programDetailLoader
          },
        ]
      },
      {
        path: `:kindOfProgram`,
        element: <ProgramCategory />
      },
      {
        path: ':kindOfProgram/:country',
        element: <ProgramsList />,
        loader: programsLoader
      },
      {
        path: ':kindOfProgram/:country/:id',
        element: <ProgramDetail />,
        loader: programDetailLoader
      },
      {
        path: ':kindOfProgram/:id',
        element: <ProgramDetail />,
        loader: programDetailLoader
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />
}

export default App

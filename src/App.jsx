import { Outlet } from 'react-router-dom'
import './App.css'
import ImgCard from './components/ImgCard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <ImgCard imgUrl='/src/assets/imgs/index/slider.jpg' className='bg-top bg-no-repeat bg-cover w-full h-96' />

      <Outlet />

      <Footer />
    </>
  )
}

export default App

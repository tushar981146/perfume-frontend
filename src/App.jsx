import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './components/ProductDetail'
import { useEffect } from 'react'
import useProductStore from './store/product'
import NavComponent from './components/NavComponent'
import CollectionPage from './pages/CollectionPage'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {

 
 

  return (
    <div className='min-h-screen w-full bg-red-800 lg:w-full'>
    <NavComponent />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/collections' element={<CollectionPage />} />
      <Route path='/product/:id' element={<ProductsPage />} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
    </Routes>
    <Footer />
    </div>
  )
};



export default App

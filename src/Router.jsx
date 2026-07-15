import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import MainLayout from './layouts/MainLayout'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainLayout />  } >
            <Route index element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/contact" element= {<ContactPage />}/>
            <Route path="product" element={<Outlet />}>
                <Route index element= {<ProductPage />}/>
                <Route path="/product/:id" element= {<ProductDetailPage />}/>
            </Route>
            
        </Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default Router
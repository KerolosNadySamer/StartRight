import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home.jsx';

import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';
import Main from './components/Main/Main.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Contact from './components/Contact/Contact.jsx';
import Product from './components/Product/Product.jsx';
import ViewProduct from './components/ViewProduct/ViewProduct.jsx';





function App() {
  

  return (
    <>
    
      <Routes>
      <Route path="/" element={<Main />}>
        {/* Home هيظهر مكان الـ Outlet لما نكون في المسار الرئيسي */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={< Contact/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        //params
        <Route path="/product/:pId" element={<ViewProduct />} />
      </Route>
    </Routes>
    </>
  )
}

export default App

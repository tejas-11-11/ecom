import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import ProductPage from './pages/productpage';
import Checkout from './pages/checkout';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

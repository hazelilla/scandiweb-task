import './App.css';
import HomePage from './pages/home/HomePage';
import ProductPage from './pages/product/ProductPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

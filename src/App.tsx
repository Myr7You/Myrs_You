import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import BlogDetail from './Pages/BlogDetail/BlogDetail';
import About from './Pages/About/About';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Myrs_You" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

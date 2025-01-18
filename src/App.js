import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertyList from './pages/PropertyList';
import PropertySingle from './pages/PropertySingle';


function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/PropertyList" element={<PropertyList />} />
          <Route path="/PropertySingle/:property_no" element={<PropertySingle />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;

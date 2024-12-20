import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Hero from './component/hero/Hero';
import About from './page/about/About';
import Service from './page/service/Service';
import Property from './page/property/Property';
import Contact from './page/contact/Contact';
import Newsletter from './page/newsletter/Newsletter';
import Footer from './page/footer/Footer';
import PropertyDetail from './page/property/PropertyDetail';
import AboutUs from './page/aboutus/AboutUs'
import AboutDetails from './page/aboutus/AboutDetails';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       
       
        <Route path="/property/:id" element={<PropertyDetail />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/about-details" element={<AboutDetails />} />
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Service />
            <Property />
            <Contact />
            <Newsletter />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;

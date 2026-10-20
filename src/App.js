import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Events from './components/Events';
import FeaturedBooks from './components/FeaturedBooks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Events />
      <FeaturedBooks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

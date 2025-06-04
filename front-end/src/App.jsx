import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Admission from './Components/Admission';
import CS_BSc from './pages/Academics/CS_BSc';
import SE_BSc from './pages/Academics/SE_BSc';
import CS_MSc from './pages/Academics/CS_MSc';
import SE_MSc from './pages/Academics/SE_MSc';
import Course_List from './pages/Academics/Course_List';
import Contact from './Components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/cs-bsc" element={<CS_BSc />} />
        <Route path="/se-bsc" element={<SE_BSc />} />
        <Route path="/cs-msc" element={<CS_MSc />} />
        <Route path="/se-msc" element={<SE_MSc />} />
        <Route path="courses-list" element={<Course_List />} />
        <Route path="contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

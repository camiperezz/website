import './App.css';
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className='App'>
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contact" element={<Contact />} exact />

        {/* <Route path='/' >
          <Route path='home' element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='contact' element={ <Contact /> } />
        </Route> */}
      </Routes>

    </div>

  );
}

export default App;

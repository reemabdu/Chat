// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route , Switch} from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Navbar from "./Components/NavBar/Navbar";
import './App.css';
import Home  from "./pages/home";
import About from './pages/About';
import Contact from './pages/Contact';
import Newchat from './Newchat';
import Chat from './pages/Chat';
import Botton from './Components/Botton/Botton';
  function App() {
  return (
    <div id='root'>
 <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newchat" element={<Newchat />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Botten" element={<Botton />} />
        </Routes>
    </BrowserRouter>
      
    </div>
    </div>
   
    
  );
  
}

export default App;




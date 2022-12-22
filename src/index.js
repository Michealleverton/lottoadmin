import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/Mymain.css';
import './components/styles.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Lottories,
  Mytickets,
  Specialdraws,
} from "./components";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Lottories" element={<Lottories />} />
      <Route path="/Mytickets" element={<Mytickets />} />
      <Route path="/Specialdraws" element={<Specialdraws />} />
    </Routes>
    <Footer />
  </Router>,
);

import React from 'react';
import './App.css';
import Page01 from './Pages/Page01';
import Page02 from './Pages/Page02';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Page01 />} />
          <Route path="Page02" element={<Page02 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
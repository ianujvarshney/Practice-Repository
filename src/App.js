import React from 'react';
import './App.css';
import Page01 from './Pages/Page01';
import Page02 from './Pages/Page02';
import Page03 from './Pages/Page03';
import Page04 from './Pages/Page04';
import Page05 from './Pages/Page05';
import Page06 from './Pages/Page06';
import Page07 from './Pages/Page07';
import Page08 from './Pages/Page08';
import Page09 from './Pages/Page09';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Page01 />} />
          <Route path="Page02" element={<Page02 />} />
          <Route path="Page03" element={<Page03 />} />
          <Route path="Page04" element={<Page04 />} />
          <Route path="Page05" element={<Page05 />} />
          <Route path="Page06" element={<Page06 />} />
          <Route path="Page07" element={<Page07 />} />
          <Route path="Page08" element={<Page08 />} />
          <Route path="Page09" element={<Page09 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
import React from 'react';
import './App.css';
import Page01 from './Pages/Page01';
import Page02 from './Pages/Page02';
// import { Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Route exact Path="/" component={Page01} />
      <Route exact Path="/Page02" component={Page02} />
    </>
  );
}

export default App;
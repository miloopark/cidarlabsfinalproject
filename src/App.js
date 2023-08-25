import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
            <a href="#about">About</a>
            <a href="#research">Research Statement</a>
            <a href="#research-timeline">Research Timeline</a>
            <a href="#summary">Summary</a>
            <a href="#outreach">Outreach</a>
            <a href="#busummary">Work At BU</a>
        </nav>

        <div className="main-content"> 
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}



export default App;

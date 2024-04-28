import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/StartScreen';
import Wishes from './components/Wishes';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/wishes" element={<Wishes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

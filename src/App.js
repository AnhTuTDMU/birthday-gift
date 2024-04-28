import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/StartScreen';
import Wishes from './components/Wishes';

import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomeScreen />}></Route>
          <Route path="/wishes" element={<Wishes />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

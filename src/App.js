import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import SingleCat from './components/SingleCat';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:id" element={<SingleCat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
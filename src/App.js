import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AllDogBreeds from './components/AllDogBreeds';
import AboutDogBreed from './components/AboutDogBreed';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<AllDogBreeds />} />
          <Route path=':breed' element={<AboutDogBreed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

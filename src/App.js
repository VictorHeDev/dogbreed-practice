import logo from './logo.svg';
import doge from './assets/header-doge.jpg';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import AllDogBreeds from './components/AllDogBreeds';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <div className='main-header-container'>
            <img className='doge-logo' src={doge} alt='doge-logo' />
            <h1>BROWSE SOME DOGES</h1>
          </div>
          <nav className='App-nav'>
            <div>ALL DOG BREEDS!</div>
            <div>And maybe some more stuff</div>
          </nav>
        </header>
        <main>
          <AllDogBreeds />
        </main>
      </div>
    </Router>
  );
}

export default App;

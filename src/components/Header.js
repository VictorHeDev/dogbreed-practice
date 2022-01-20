import doge from '../assets/header-doge.jpg';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = (props) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='main-header-container'>
          <img className='doge-logo' src={doge} alt='doge-logo' />
          <h1>BROWSE SOME DOGES</h1>
        </div>
        <nav className='App-nav'>
          <Link to="/">HOME</Link>
          <div>ALL DOG BREEDS!</div>
          <div>And maybe some more stuff</div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

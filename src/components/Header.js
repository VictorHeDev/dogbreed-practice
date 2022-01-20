import doge from '../assets/header-doge.jpg';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = (props) => {
  return (
    <header className='App-header'>
      <div className='main-header-container'>
        <img className='doge-logo' src={doge} alt='doge-logo' />
        <h1>BROWSE SOME DOGES</h1>
      </div>
      <nav className='App-nav'>
        <NavLink to='/'>HOME</NavLink>
        <div>ALL DOG BREEDS!</div>
        <div>And maybe some more stuff</div>
      </nav>
    </header>
  );
};

export default Header;

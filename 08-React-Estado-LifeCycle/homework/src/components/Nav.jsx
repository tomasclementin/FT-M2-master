import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='divGeneral'>
      <div className='divIzq'>
        <img src={Logo} alt='Logo Henry'/>
        <h6>Henry - Weather App</h6>
      </div>
      <div className='searchBar'>
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  );
};

export default Nav;

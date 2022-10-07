import React from 'react';
import a from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (<div className={a.searchDiv}>
    <div className={a.divSearch}>
     <input type='text'/>
     <button className={a.searchButton} onClick={() => props.onSearch('Agregando ciudad...')}>Agregar</button>
    </div>
  </div>)
};
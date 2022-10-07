import React, { useState } from "react";
import './SearchBar.css';
export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={e => setCity(e.target.value)}
        value={city}
      />
      <input className="searchBar" type="submit" value="Agregar" />
    </form>
  );
}

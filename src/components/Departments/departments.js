import React, { useState } from 'react';

const Departments = ({ sklepy }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSklepy, setFilteredSklepy] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = sklepy.filter((sklep) =>
      sklep.miejscowosc.toLowerCase().includes(query)
    );
    setFilteredSklepy(filtered);
  };

  return (
    <div>
      <h1>Lista Sklepów</h1>
      <input
        type="text"
        placeholder="Wyszukaj sklep..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredSklepy.length > 0 ? (
          filteredSklepy.map((sklep) => (
            <li key={sklep.id}>
              {sklep.nazwa} - {sklep.miejscowosc}
            </li>
          ))
        ) : (
          <li>Brak wyników wyszukiwania</li>
        )}
      </ul>
    </div>
  );
};

export default Departments;
import React, { useState } from 'react';

const SearchBar = ({ search, setSearch, maxLength, setMaxLength, setMovies,movies }) => {
  const [sortDir, setDir] = useState('asc');

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const maxLengthHandler = (e) => {
    setMaxLength(e.target.value);
  };

  const handleSort = () => {
    let sortedMovies = [...movies];
    if (sortDir === 'asc') {
      sortedMovies.sort((a, b) => a.length - b.length);
      setDir('desc');
    } else {
      sortedMovies.sort((a, b) => b.length - a.length);
      setDir('asc');
    }
    setMovies(sortedMovies);
  };

  return (
    <>
      <label htmlFor='search'>Search Query</label>
      <input type='text' name='search' onChange={searchHandler} value={search} />
      <label htmlFor='max-length'>Max Length</label>
      <input type='number' name='max-length' onChange={maxLengthHandler} value={maxLength} />
      <button onClick={handleSort}>
        {sortDir === 'asc' ? 'Sort by length (ASC)' : 'Sort by length (DESC)'}
      </button>
    </>
  );
};




export default SearchBar;
import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input 
        aria-label='Search Robots'
        className='search-field' 
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
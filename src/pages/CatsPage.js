import React, { useState } from 'react';
import CatGallery from '../components/CatGallery';
import SearchBar from '../components/SearchBar';

const CatsPage = () => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  return (
    <div>
      <h1 className='text-center p-4'>Cats Gallery</h1>
      <SearchBar onChangeValue={handleSearchChange} />
      <CatGallery query={query} />
    </div>
  );
};

export default CatsPage;

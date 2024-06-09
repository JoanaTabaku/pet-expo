import React, { useState } from 'react';
import BirdGallery from '../components/BirdGallery';
import SearchBar from '../components/SearchBar';

const BirdsPage = () => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  return (
    <div>
      <h1 className='text-center p-4'>Birds Gallery</h1>
      <SearchBar onChangeValue={handleSearchChange} />
      <BirdGallery query={query} />
    </div>
  );
};

export default BirdsPage;
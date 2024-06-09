import React, { useState } from 'react';
import DogGallery from '../components/DogGallery';
import SearchBar from '../components/SearchBar';

const DogsPage = () => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  return (
    <div>
      <h1 className='text-center p-4'>Dogs Gallery</h1>
      <SearchBar onChangeValue={handleSearchChange}/>
      <DogGallery query={query} />
    </div>
  );
};

export default DogsPage;

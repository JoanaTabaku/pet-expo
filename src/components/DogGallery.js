import React, { useState, useEffect, useCallback } from 'react';
import { fetchDogs, fetchDogById } from '../api/apiService';
import { Modal, Button } from 'react-bootstrap';
import debounce from 'lodash.debounce';
import SearchBar from './SearchBar';
import DogCard from './DogCard';
import './DogGallery.css';

const DogGallery = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);
  const [query, setQuery] = useState('');

  const getDogs = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const dogData = await fetchDogs(searchQuery);
      setDogs(dogData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDogs(query);
  }, [query]);

  const debouncedSearch = useCallback(debounce((value) => {
    setQuery(value);
  }, 500), []);

  const handleShow = async (id) => {
    try {
      const dogData = await fetchDogById(id);
      setSelectedDog(dogData);
      setShow(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClose = () => setShow(false);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    debouncedSearch(value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <SearchBar query={query} onChange={handleSearchChange} />
      <div className="row">
        {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} onClick={handleShow} />
        ))}
      </div>

      {selectedDog && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedDog.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedDog.image} alt={selectedDog.name} className="img-fluid mb-3" />
            <p><strong>Breed Group:</strong> {selectedDog.breed_group}</p>
            <p><strong>Size:</strong> {selectedDog.size}</p>
            <p><strong>Lifespan:</strong> {selectedDog.lifespan}</p>
            <p><strong>Origin:</strong> {selectedDog.origin}</p>
            <p><strong>Temperament:</strong> {selectedDog.temperament}</p>
            <p><strong>Colors:</strong></p>
            <ul>
              {selectedDog.colors.map((color, index) => (
                <li key={index}>{color}</li>
              ))}
            </ul>
            <p><strong>Description:</strong> {selectedDog.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default DogGallery;

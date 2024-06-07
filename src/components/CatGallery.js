import React, { useState, useEffect, useCallback } from 'react';
import { fetchCats, fetchCatById } from '../api/apiService';
import { Modal, Button } from 'react-bootstrap';
import debounce from 'lodash.debounce';
import SearchBar from './SearchBar'; 
import CatCard from './CatCard';
import './CatGallery.css';

const CatGallery = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  const [query, setQuery] = useState('');

  const getCats = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const catData = await fetchCats(searchQuery);
      setCats(catData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCats(query);
  }, [query]);

  const debouncedSearch = useCallback(debounce((value) => {
    setQuery(value);
  }, 500), []);

  const handleShow = async (id) => {
    try {
      const catData = await fetchCatById(id);
      setSelectedCat(catData);
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
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} onClick={handleShow} />
        ))}
      </div>

      {selectedCat && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCat.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedCat.image} alt={selectedCat.name} className="img-fluid mb-3" />
            <p><strong>Origin:</strong> {selectedCat.origin}</p>
            <p><strong>Temperament:</strong> {selectedCat.temperament}</p>
            <p><strong>Colors:</strong></p>
            <ul>
              {selectedCat.colors.map((color, index) => (
                <li key={index}>{color}</li>
              ))}
            </ul>
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

export default CatGallery;

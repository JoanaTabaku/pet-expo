import React, { useState, useEffect } from 'react';
import { fetchBirds, fetchBirdById } from '../api/apiService';
import { Modal, Button } from 'react-bootstrap';
import BirdCard from './BirdCard';
import './BirdGallery.css';

const BirdGallery = ({query}) => {
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedBird, setSelectedBird] = useState(null);

  const getBirds = async () => {
    setLoading(true);
    setError(null);
    try {
      const birdData = await fetchBirds(query);
      setBirds(birdData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBirds();
  }, [query]);


  const handleShow = async (id) => {
    try {
      const birdData = await fetchBirdById(id);
      setSelectedBird(birdData);
      setShow(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClose = () => setShow(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <div className="row">
        {birds.map((bird) => (
          <BirdCard key={bird.id} bird={bird} onClick={handleShow} />
        ))}
      </div>

      {selectedBird && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedBird.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedBird.image} alt={selectedBird.name} className="img-fluid mb-3" />
            <p><strong>Species:</strong> {selectedBird.species}</p>
            <p><strong>Family:</strong> {selectedBird.family}</p>
            <p><strong>Habitat:</strong> {selectedBird.habitat}</p>
            <p><strong>Place of Found:</strong> {selectedBird.place_of_found}</p>
            <p><strong>Diet:</strong> {selectedBird.diet}</p>
            <p><strong>Description:</strong> {selectedBird.description}</p>
            <p><strong>Weight:</strong> {selectedBird.weight_kg} kg</p>
            <p><strong>Height:</strong> {selectedBird.height_cm} cm</p>
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

export default BirdGallery;

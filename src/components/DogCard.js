import React from 'react';
import { Card, Button } from 'react-bootstrap';

const DogCard = ({ dog, onClick }) => (
  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
    <Card className="h-100 border-0 shadow-sm">
      <Card.Img variant="top" src={dog.image} alt={dog.name} className="rounded-top" />
      <Card.Body>
        <Card.Title>{dog.name}</Card.Title>
        <Card.Text><strong>Origin:</strong> {dog.origin}</Card.Text>
        <Button variant="dark" onClick={() => onClick(dog.id)}>View Details</Button>
      </Card.Body>
    </Card>
  </div>
);

export default DogCard;

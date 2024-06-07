import React from 'react';

const BirdCard = ({ bird, onClick }) => (
  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div className="card h-100 border-0 shadow-sm">
      <img src={bird.image} className="card-img-top rounded-top" alt={bird.name} />
      <div className="card-body">
        <h5 className="card-title">{bird.name}</h5>
        <p className="card-text"><strong>Origin:</strong> {bird.place_of_found}</p>
        <button className="btn btn-dark" onClick={() => onClick(bird.id)}>View Details</button>
      </div>
    </div>
  </div>
);

export default BirdCard;

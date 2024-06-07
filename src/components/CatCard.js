import React from 'react';

const CatCard = ({ cat, onClick }) => (
  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div className="card h-100 border-0 shadow-sm">
      <img src={cat.image} className="card-img-top rounded-top" alt={cat.name} />
      <div className="card-body">
        <h5 className="card-title">{cat.name}</h5>
        <p className="card-text"><strong>Origin:</strong> {cat.origin}</p>
        <button className="btn btn-dark" onClick={() => onClick(cat.id)}>View Details</button>
      </div>
    </div>
  </div>
);

export default CatCard;

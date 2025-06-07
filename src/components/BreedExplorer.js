import React, { useEffect, useState } from 'react';
import TextSpinner from './TextSpinner';

export default function BreedExplorer() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch list of breeds
  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await res.json();
      setBreeds(Object.keys(data.message));
    };
    fetchBreeds();
  }, []);

  // Fetch image for selected breed
  const handleFetch = async () => {
    if (!selectedBreed) return;
    setLoading(true);
    const res = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`);
    const data = await res.json();
    setImage(data.message);
    setLoading(false);
  };

  return (
    <div className="container text-center" style={{ marginTop: "80px" }}>
      <h2 className="mb-3">🐶 Explore Dog Breeds</h2>
      <div className="mb-3">
        <select
          className="form-select form-select-lg"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="">Select a Breed</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed.charAt(0).toUpperCase() + breed.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-success mb-4" onClick={handleFetch}>
        Show Dog
      </button>

      {loading ? (
        <TextSpinner />
      ) : (
        image && (
          <div className="d-flex justify-content-center">
            <img
              src={image}
              alt={selectedBreed}
              className="img-fluid rounded shadow"
              style={{ width: '400px', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        )
      )}
    </div>
  );
}

import React, { useState } from "react";
import TextSpinner from "./TextSpinner";

export default function Content(props) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchdata = async () => {
    setLoading(true);
    const url = "https://dog.ceo/api/breeds/image/random";
    const data = await fetch(url);
    const parsedData = await data.json();
    setImage(parsedData.message);
    setLoading(false);
  };

  return (
    <section className="container text-center hero-section">
      <h1 className="mb-4 fw-bold hero-title">
        Stress Less, Smile More with a Cute Dog 🐶
      </h1>

      <button
        type="button"
        className="btn btn-primary btn-lg mb-4 app-btn-primary"
        onClick={fetchdata}
      >
        Show Random Dog
      </button>

      {loading ? (
        <TextSpinner />
      ) : (
        image && (
          <div className="d-flex justify-content-center">
            <div className="dog-image-shell">
              <img
                src={image}
                alt="Random Dog"
                className="img-fluid rounded hero-dog-image"
              />
            </div>
          </div>
        )
      )}
    </section>
  );
}

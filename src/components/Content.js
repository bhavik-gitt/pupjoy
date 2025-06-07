import React, { useState } from "react";
import TextSpinner from "./TextSpinner";

export default function Content(props) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // Start as false
  const fetchdata = async () => {
    setLoading(true); // Set loading before fetch
    const url = "https://dog.ceo/api/breeds/image/random";
    const data = await fetch(url);
    const parsedData = await data.json();
    setImage(parsedData.message);
    setLoading(false); // Done loading
  };
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4" style={{ marginTop: "90px" }}>
        Stress Less, Smile More with a Cute Dog 🐶
      </h1>

      <button
        type="button"
        className="btn btn-primary btn-lg mb-4"
        onClick={fetchdata}
      >
        Show Random Dog
      </button>

      {loading ? (
        <TextSpinner />
      ) : (
        image && (
          <div className="d-flex justify-content-center">
            <img
              src={image}
              alt="Random Dog"
              className="img-fluid rounded shadow"
              style={{
                maxWidth: "100%",
                width: "400px",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        )
      )}
    </div>
  );
}

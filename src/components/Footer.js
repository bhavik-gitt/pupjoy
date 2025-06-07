// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
  <footer className="text-center py-4 text-muted mt-auto">
  <small>
    © {new Date().getFullYear()} <strong>Pupjoy</strong> — <em>Your Daily Dose of Dog Joy 🐾</em><br />
    Created with ❤️ by <strong>Bhavik Ratnottar</strong> using{" "}
    <a href="https://dog.ceo/dog-api/" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
      Dog CEO API
    </a>
    .<br />
    {/* Enjoy real-time updates of the cutest dog images from around the world. */}
  </small>
</footer>


  );
}

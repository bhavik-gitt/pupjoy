import React from "react";

export default function Footer() {
  return (
    <footer className="app-footer text-center py-4 mt-auto">
      <small>
        © {new Date().getFullYear()} <strong>Pupjoy</strong> — <em>Your Daily Dose of Dog Joy 🐾</em><br />
        Created with ❤️ by <strong>Bhavik</strong> using{" "}
        <a href="https://dog.ceo/dog-api/" className="app-footer-link" target="_blank" rel="noopener noreferrer">
          Dog CEO API
        </a>
        .<br />
      </small>
    </footer>
  );
}

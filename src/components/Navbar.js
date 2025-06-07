import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  let Title = props.Title
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/applogo.png" // path from public/
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top me-2 rounded-circle"
            />
            <span className="fw-bold">{Title}</span>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" aria-current="page" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" aria-current="page" href="/explore">Expore</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

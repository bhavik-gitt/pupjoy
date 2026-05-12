import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  let Title = props.Title
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/applogo.png" // path from public/
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top me-2 rounded-circle"
            />
            <span className="fw-bold ">{Title}</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" aria-current="page" to="/explore">Expore</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

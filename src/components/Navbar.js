import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
  const Title = props.Title;

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Explore', to: '/explore' },
  ];

  return (
    <div className="app-navbar-wrapper">
      <nav className="navbar navbar-expand-lg fixed-top app-navbar" aria-label="Primary navigation">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center app-navbar-brand" to="/">
            <span className="d-inline-flex align-items-center me-2 app-navbar-logo-wrap">
              <img
                src="/applogo.png"
                alt={`${Title} logo`}
                width="44"
                height="44"
                className="d-inline-block align-text-top rounded-circle app-navbar-logo"
              />
            </span>
            <span className="fw-bold">{Title}</span>
          </Link>

          <button
            className="navbar-toggler app-navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 app-navbar-links">
              {navItems.map((item) => (
                <li className="nav-item" key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `nav-link fw-semibold app-nav-link${isActive ? ' active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React from 'react';

export default function TextSpinner() {
  return (
    <div
      className="app-spinner-wrap"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="app-spinner-card">
        {/* Animated ring */}
        <div className="app-spinner-ring" aria-hidden="true">
          <div className="app-spinner-ring-inner" />
          <span className="app-spinner-paw" aria-hidden="true">🐾</span>
        </div>

        {/* Label + animated dots */}
        <p className="app-spinner-label" aria-hidden="true">
          Fetching pups
          <span className="app-spinner-dots">
            <span>.</span><span>.</span><span>.</span>
          </span>
        </p>

        {/* Shimmer progress bar */}
        <div className="app-spinner-bar" aria-hidden="true">
          <div className="app-spinner-bar-fill" />
        </div>
      </div>
    </div>
  );
}

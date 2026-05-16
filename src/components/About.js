import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-section container mt-5 premium-surface" aria-labelledby="about-title">
      <header className="about-hero text-center text-lg-start">
        <p className="about-eyebrow mb-2">About PupJoy</p>
        <h1 id="about-title" className="mb-3 fw-bold">
          Daily dog joy with a modern, calming, and accessible experience
        </h1>
        <p className="about-lead mb-0">
          PupJoy is a lightweight web app that serves random high-quality dog photos from the{" "}
          <a href="https://dog.ceo/dog-api/" target="_blank" rel="noopener noreferrer">
            Dog CEO API
          </a>{" "}
          to help you relax, recharge, and smile in seconds.
        </p>
      </header>

      <div className="about-highlights row g-3 g-lg-4 mt-1">
        <article className="col-md-6 col-xl-3">
          <div className="about-card h-100">
            <h2 className="about-card-title">Fast</h2>
            <p className="mb-0">One click to load a fresh image with smooth transitions.</p>
          </div>
        </article>
        <article className="col-md-6 col-xl-3">
          <div className="about-card h-100">
            <h2 className="about-card-title">Clean</h2>
            <p className="mb-0">No account, no clutter, and no disruptive ads.</p>
          </div>
        </article>
        <article className="col-md-6 col-xl-3">
          <div className="about-card h-100">
            <h2 className="about-card-title">Responsive</h2>
            <p className="mb-0">Designed for mobile, tablet, and desktop screens.</p>
          </div>
        </article>
        <article className="col-md-6 col-xl-3">
          <div className="about-card h-100">
            <h2 className="about-card-title">Privacy-first</h2>
            <p className="mb-0">No personal data collection and no sign-up required.</p>
          </div>
        </article>
      </div>

      <div className="about-grid row g-4 mt-2">
        <article className="col-lg-6">
          <div className="about-panel h-100">
            <h2>Why people use PupJoy</h2>
            <p>
              Looking at friendly pet photos can reduce stress and improve mood. PupJoy offers a quick
              positive break for students, remote workers, and dog lovers.
            </p>
            <ul>
              <li>Instant random dog images</li>
              <li>Lightweight and easy to use</li>
              <li>Focused on joy, not distractions</li>
            </ul>
          </div>
        </article>
        <article className="col-lg-6">
          <div className="about-panel h-100">
            <h2>Built with modern web standards</h2>
            <p>PupJoy is designed with performance, accessibility, and SEO-friendly structure in mind.</p>
            <ul>
              <li>Semantic headings and readable content hierarchy</li>
              <li>Optimized responsive layout and polished UI details</li>
              <li>Accessible interactions and reduced-motion support</li>
            </ul>
          </div>
        </article>
      </div>

      <section className="about-steps mt-4" aria-labelledby="how-to-use">
        <h2 id="how-to-use">How to use PupJoy</h2>
        <ol className="mb-0">
          <li>Tap or click <strong>Show Random Dog</strong>.</li>
          <li>Wait briefly for the image to load.</li>
          <li>Enjoy the photo and repeat anytime.</li>
        </ol>
      </section>

      <section className="about-cta text-center mt-4" aria-label="Start exploring dog images">
        <p className="mb-3">Ready for your next smile?</p>
        <Link to="/" className="btn app-btn-primary">
          Show Random Dog
        </Link>
      </section>
    </section>
  );
}

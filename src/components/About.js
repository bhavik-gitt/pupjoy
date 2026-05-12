import React from "react";

export default function About() {
  return (
    <section className="about-section container mt-5 p-4 rounded ">
      <h1 className="mb-4 fw-bold">About PupJoy – A Joyful Dog Image Generator</h1>

      <p>
        <strong>PupJoy</strong> is a simple, clean, and powerful <strong>React-based web application</strong> that brings you a daily dose of happiness with just a click. It fetches random dog images from the popular <a href="https://dog.ceo/dog-api/" target="_blank" rel="noopener noreferrer">Dog CEO API</a> and displays them instantly. Whether you’re taking a break, looking to boost your mood, or just love dogs — this app is for you.
      </p>

      <h2>🐶 What Makes PupJoy Special?</h2>
      <ul>
        <li>✅ Fetches high-quality dog images instantly</li>
        <li>✅ No login, no ads, no distractions</li>
        <li>✅ Built with a mobile-first approach</li>
        <li>✅ Extremely fast thanks to React & Bootstrap</li>
        <li>✅ 100% free and open-source</li>
      </ul>

      <h2>🧠 Mental Health Boost Through Dogs</h2>
      <p>
        Science confirms that looking at cute animal images — especially dogs — can lower stress, increase dopamine levels, and even enhance productivity. Pupjoy is designed as a simple digital therapy: click once, and smile instantly.
      </p>

      <h2>⚙️ Features & Functionality</h2>
      <ul>
        <li>🌐 Clean and user-friendly interface</li>
        <li>📷 Each click gives you a new dog image</li>
        <li>📱 Optimized for both desktop and mobile devices</li>
        <li>🎨 Stylish UI with Bootstrap 5 and custom CSS</li>
        <li>🌍 Multilingual support (upcoming)</li>
        <li>🌟 Daily featured dog mode (upcoming)</li>
      </ul>

      <h2>🚀 Technologies Used</h2>
      <ul>
        <li><strong>React JS:</strong> Modern, reactive front-end framework</li>
        <li><strong>Bootstrap 5:</strong> Responsive design system</li>
        <li><strong>Dog CEO API:</strong> A free and reliable dog image API</li>
        <li><strong>React Router:</strong> For seamless navigation</li>
      </ul>

      <h2>🔧 How to Use the App</h2>
      <p>
        It couldn’t be easier:
        <ol>
          <li>Click the <strong>"Show Random Dog"</strong> button</li>
          <li>Wait a second for the loading spinner</li>
          <li>Enjoy a random dog image</li>
          <li>Repeat as often as you'd like!</li>
        </ol>
      </p>

      <h2>🌍 Who This App is For</h2>
      <p>
        Pupjoy is built for everyone — students, remote workers, animal lovers, and mental health advocates. It’s ideal for anyone needing a short break filled with positive energy.
      </p>

      <h2>🧑‍💻 Developers & Contributors Welcome</h2>
      <p>
        Pupjoy is an open-source project hosted on GitHub. Developers are encouraged to fork the code, raise issues, or contribute improvements such as animations, dog facts, or accessibility features.
      </p>

      <h2>🔒 Privacy & Safety</h2>
      <p>
        Pupjoy does not collect personal data, store cookies, or require user registration. It’s 100% privacy-friendly and safe for all ages.
      </p>

      <h2>📢 Future Updates</h2>
      <ul>
        <li>🔍 Search dog by breed</li>
        <li>📅 Daily dog fact or quote with the image</li>
        <li>🔗 Social media sharing button</li>
        <li>🌈 Dark mode toggle</li>
        <li>🖼️ Save/download images</li>
      </ul>

      <h2>🎁 Why It’s Free</h2>
      <p>
        Pupjoy is a passion project. It's free, open-source, and built to spread positivity. All dog images are sourced from a public API, ensuring this remains accessible to everyone without fees or subscriptions.
      </p>

      <p className="text-center fw-bold mt-5">
        🐾 Thank you for visiting Pupjoy – may your days be full of tail wags and warm hearts!
      </p>

      <style>{`
        .about-section {
          // background: #f9fafb;
          color: #333;
          font-family: 'Poppins', sans-serif;
        }
        .about-section a {
          color: #007bff;
          text-decoration: none;
        }
        .about-section a:hover {
          text-decoration: underline;
        }
        .about-section h1, .about-section h2 {
          color: #2d2d2d;
          margin-top: 1.4rem;
        }
        .about-section p, .about-section li {
          line-height: 1.7;
          font-size: 1.05rem;
          margin-bottom: 1rem;
        }
        .about-section ul {
          padding-left: 1.2rem;
          margin-bottom: 1.5rem;
        }
        .about-section ol {
          padding-left: 1.5rem;
        }
      `}</style>
    </section>
  );
}

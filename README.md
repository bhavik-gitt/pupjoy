<div align="center">

<img src="public/applogo.png" alt="PupJoy Logo" width="110" height="110" style="border-radius:50%;" />

# 🐾 PupJoy

### *Your Daily Dose of Dog Joy*

**A delightful React web app that fetches random dog images & lets you explore 100+ breeds — because every day is better with dogs.**

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com)
[![Dog CEO API](https://img.shields.io/badge/Dog%20CEO-API-F4A261?style=for-the-badge&logo=dog&logoColor=white)](https://dog.ceo/dog-api/)
[![License](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ff69b4?style=for-the-badge)](https://github.com/bhavik-gitt/pupjoy/pulls)

<br/>

[🚀 Live Demo](#-live-demo) · [✨ Features](#-features) · [🛠 Tech Stack](#-tech-stack) · [⚡ Quick Start](#-quick-start) · [📁 Project Structure](#-project-structure) · [🤝 Contributing](#-contributing)

</div>

---

## 🌟 Overview

**PupJoy** is a fast, clean, and mobile-first React application that brings instant happiness through high-quality dog images. One click is all it takes — no logins, no ads, no distractions. Just pure puppy joy.

> 🧠 *Science confirms that viewing cute animal images lowers cortisol, boosts dopamine, and increases productivity. PupJoy is your tiny digital mood booster.*

---

## 🚀 Live Demo

> 🔗 **[pupjoy.netlify.app](https://pupjoy.netlify.app)** *(or your deployed URL here)*

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎲 **Random Dog Image** | Instantly fetch a fresh, high-quality dog photo on every click |
| 🔍 **Breed Explorer** | Browse & filter images across **100+ dog breeds** |
| 🌗 **Dark / Light Mode** | Seamless theme toggle for comfortable viewing day or night |
| 📱 **Mobile-First Design** | Fully responsive layout built with Bootstrap 5 |
| ⚡ **Lightning Fast** | Powered by React 19 — minimal re-renders, instant updates |
| 🔒 **Privacy-First** | Zero cookies, zero tracking, zero registration required |
| 🧩 **Smooth Animations** | GSAP-powered transitions for a polished feel |
| 🌐 **SEO Ready** | Proper meta tags via React Helmet |

---

## 🛠 Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19 |
| **Routing** | React Router v7 |
| **Styling** | Bootstrap 5 + Custom CSS |
| **Animations** | GSAP 3 |
| **SEO / Meta** | React Helmet |
| **Data Source** | [Dog CEO API](https://dog.ceo/dog-api/) |
| **Build Tool** | Create React App |
| **Font** | Google Fonts — Poppins |

</div>

---

## 📸 App Screenshots

<div align="center">

### 🏠 Home — Random Dog Generator
> Click **"Show Random Dog"** and a new fluffy friend appears instantly.

### 🔍 Breed Explorer
> Select any breed from the dropdown and discover breed-specific photos.

### 🌗 Dark Mode
> Toggle between light and dark themes for comfortable night-time browsing.

</div>

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** ≥ 16  
- **npm** ≥ 8

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/bhavik-gitt/pupjoy.git
cd pupjoy

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app reloads automatically on file changes.

### Other Scripts

```bash
# Run tests in interactive watch mode
npm test

# Create an optimised production build
npm run build
```

---

## 📁 Project Structure

```
pupjoy/
├── public/
│   ├── applogo.png          # App logo used in Navbar
│   ├── index.html           # HTML shell with Bootstrap CDN
│   └── manifest.json        # PWA manifest
│
├── src/
│   ├── components/
│   │   ├── Navbar.js        # Top navigation bar with logo & links
│   │   ├── Content.js       # Home page — random dog image fetcher
│   │   ├── BreedExplorer.js # Breed dropdown + breed-specific image
│   │   ├── About.js         # About page with app details
│   │   ├── Footer.js        # Footer with credits
│   │   └── TextSpinner.js   # Loading spinner component
│   │
│   ├── App.js               # Root component — routes & dark-mode state
│   ├── App.css              # Global styles
│   └── index.js             # React DOM entry point
│
├── package.json
└── README.md
```

---

## 🌐 Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Content` | Random dog image generator |
| `/explore` | `BreedExplorer` | Browse dogs by breed |
| `/about` | `About` | App overview & feature list |

---

## 🤝 Contributing

Contributions, bug reports, and feature requests are warmly welcome!

```bash
# Fork the repo, then:
git checkout -b feature/your-awesome-feature
git commit -m "feat: add your awesome feature"
git push origin feature/your-awesome-feature
# Open a Pull Request 🎉
```

**Ideas for contributions:**
- 🔗 Social media share button
- 📥 Download / save image button
- 📅 Daily dog fact alongside each image
- 🌍 Multilingual support
- 🖼️ Image gallery / favourites

---

## 📄 License

This project is open-source under the **MIT License** — free to use, fork, and build upon.

---

<div align="center">

Made with ❤️ by **[Bhavik Ratnottar](https://github.com/bhavik-gitt)**

*🐾 May your days be full of tail wags and warm hearts!*

<br/>

⭐ **If PupJoy made you smile, please star the repo!** ⭐

</div>
    

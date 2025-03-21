import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import bnr from './assets/images/bnr-bg.webp';
const [Header, Footer] = ['/Header', '/Footer'].map((path) => React.lazy(() => import(`./layout${path}`)));
const [Menus, Logos, Banners, Notfound, Socials, Cards, Prints, Sublimation, About, Prices] = ['/Menus', '/Logos', '/Banners', '/Cards', '/Prints', '/Sublimation', '/About', '/Prices', '/Socials', '/404'].map((path) => React.lazy(() => import(`./pages${path}`)));
const App = () => {
  return (
    <>
      <svg
        className="banr-animtn absolute top-0 right-0 z-0 max-w-4xl"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1004.6 757.4"
      >
        <path
          opacity="0.149"
          fill="#ffff"
          d="M 1345.9 78.1 c 0 242.7 -95.1752 352.45 -348.075 352.45 c -83 0 -134.812 205.219 -218.512 202.119 c -93.6 -3.5 -44.7063 -274.569 -117.606 -274.569 s -104.125 148.838 -179.725 148.838 s -58.5063 -271.338 -209.706 -320.538 s -173 -118.8 -173 -156.3 c 0 -242.7 536.025 -391.5 788.825 -391.5 s 457.8 196.8 457.8 439.5 Z"
        >
          <animate
            attributeName="d"
            dur="3000ms"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.3 0 0.7 1; 0.3 0 0.7 1"
            values="M1345.9 78.1c0 242.7-99.4 358.9-352.3 358.9-83 0-132.2 202.8-215.9 199.7-93.6-3.5-43.9-278.6-116.8-278.6s-100.9 144-176.5 144-57.7-266.5-208.9-315.7-173-118.8-173-156.3c0-242.7 532.8-391.5 785.6-391.5s457.8 196.8 457.8 439.5z;

                    M1345.9 78.1c0 242.7-47 278.9-299.9 278.9-83 0-164.6 232.8-248.3 229.7-93.6-3.5-53.9-228.6-126.8-228.6s-140.9 204-216.5 204-67.7-326.5-218.9-375.7-173-118.8-173-156.3c0-242.7 572.8-391.5 825.6-391.5s457.8 196.8 457.8 439.5z;

                    M1345.9 78.1c0 242.7-99.4 358.9-352.3 358.9-83 0-132.2 202.8-215.9 199.7-93.6-3.5-43.9-278.6-116.8-278.6s-100.9 144-176.5 144-57.7-266.5-208.9-315.7-173-118.8-173-156.3c0-242.7 532.8-391.5 785.6-391.5s457.8 196.8 457.8 439.5z"
          ></animate>
        </path>
      </svg>
      <img
        src={bnr}
        alt=""
        className="absolute top-0 left-0 z-0 w-full h-150 object-cover"
      />
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Menus />}
          />
          <Route
            path="/branding-logo-design"
            element={<Logos />}
          />
          <Route
            path="banner"
            element={<Banners />}
          />
          <Route
            path="/social-media"
            element={<Socials />}
          />
          <Route
            path="/prints/paper-prints"
            element={<Prints />}
          />
          <Route
            path="/prints/sublimation-printing"
            element={<Sublimation />}
          />
          <Route
            path="/prints/card-flair"
            element={<Cards />}
          />
          <Route
            path="/about-us"
            element={<About />}
          />
          <Route
            path="/custom-quote"
            element={<Prices />}
          />
          <Route
            path="*"
            element={<Notfound />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

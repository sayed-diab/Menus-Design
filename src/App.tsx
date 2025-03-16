import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
const [Header, Footer] = ['/Header', '/Footer'].map((path) => React.lazy(() => import(`./layout${path}`)));
const [Menus, Logos, Banners, Notfound, Socials, Cards, Prints, Sublimation, About, Prices] = ['/Menus', '/Logos', '/Banners', '/Cards', '/Prints', '/Sublimation', '/About', '/Prices', '/Socials', '/404'].map((path) => React.lazy(() => import(`./pages${path}`)));
const App = () => {
  return (
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
  );
};

export default App;

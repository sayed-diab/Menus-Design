import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

const LazyComponent = (path: string) => React.lazy(() => import(`./${path}.tsx`));

const components = {
  Header: LazyComponent('layout/Header'),
  Footer: LazyComponent('layout/Footer'),
  Menus: LazyComponent('pages/Menus'),
  Logos: LazyComponent('pages/Logos'),
  Banners: LazyComponent('pages/Banners'),
  Notfound: LazyComponent('pages/404'),
  Socials: LazyComponent('pages/Socials'),
  Cards: LazyComponent('pages/Cards'),
  Prints: LazyComponent('pages/Prints'),
  Sublimation: LazyComponent('pages/Sublimation'),
  About: LazyComponent('pages/About'),
  Prices: LazyComponent('pages/Prices'),
};

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<components.Menus />}
      />
      <Route
        path="/branding-logo-design"
        element={<components.Logos />}
      />
      <Route
        path="/banner"
        element={<components.Banners />}
      />
      <Route
        path="/social-media"
        element={<components.Socials />}
      />
      <Route
        path="/prints/paper-prints"
        element={<components.Prints />}
      />
      <Route
        path="/prints/sublimation-printing"
        element={<components.Sublimation />}
      />
      <Route
        path="/prints/card-flair"
        element={<components.Cards />}
      />
      <Route
        path="/about-us"
        element={<components.About />}
      />
      <Route
        path="/custom-quote"
        element={<components.Prices />}
      />
      <Route
        path="*"
        element={<components.Notfound />}
      />
    </Routes>
    <components.Footer />
  </Router>
);

export default App;

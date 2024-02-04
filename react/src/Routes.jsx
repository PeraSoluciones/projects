import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Contact = React.lazy(() => import("pages/Contact"));
const Servicios = React.lazy(() => import("pages/Servicios"));
const About = React.lazy(() => import("pages/About"));
const Inicio = React.lazy(() => import("pages/Inicio"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

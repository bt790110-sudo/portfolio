import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

import ProjectDetails from "./pages/ProjectDetails";

import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

function App() {

  return (

    <MainLayout>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/projects" element={<Projects />} />

        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </MainLayout>

  );

}

export default App;
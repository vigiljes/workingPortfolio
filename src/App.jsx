import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import About2 from "./components/expcard";
import About3 from "./components/expcard2"
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Experience2 from "./components/Experience2";
import Experience3 from "./components/Experience3";

import ActualExper from "./components/ACTEXP";
import ActualExper2 from "./components/ACTEXP2";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/Scribe";
import BackToTop from "./components/ToTop";
import JobDescriptions from "./components/descrip1";
import JobDescriptions2 from "./components/descrip2";
import JobDescriptions3 from "./components/descrip3";
import JobDescriptions4 from "./components/descrip4";

import WireframeGrid from "./components/wireframing";
import ProjectDetail from "./components/ProjectDetail"; // NEW: Import project detail component

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Scrolls to top on route change */}
      <div className="pt-20">
        <Navbar />
        <div className="mt-[80px] overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          </div>

          <div className="container mx-auto px-8">
            <Routes>
              <Route path="/" element={<><Hero /><Projects /><Technologies /><Contact /></>} />
              <Route path="/resume" element={<><Experience /><Contact /></>} />
              <Route path="/about" element={<><About /><Contact /></>} />
              <Route path="/RecordBingo" element={<><About2 /><Experience2 /><ActualExper /><JobDescriptions /><WireframeGrid /><JobDescriptions2 /><Contact /></>} />
{/* NEW: Dynamic route for individual project pages */}
              <Route path="/projects/:projectId" element={<><ProjectDetail /><Contact /></>}/>
            </Routes>
          </div>
        </div>
      </div>
      <BackToTop /> {/* Manual scroll button */}
    </Router>
  );
};

export default App;
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WorkPanels from "./components/sections/WorkPanels";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <WorkPanels />
      </main>
    </>
  );
}

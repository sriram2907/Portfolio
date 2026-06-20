import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-bg min-h-screen selection:bg-scan selection:text-bg">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}

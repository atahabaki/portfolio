import "./App.css";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <main className="bg-surface">
      <NavBar />
      <Hero />
      <Contact />
    </main>
  );
}

export default App;

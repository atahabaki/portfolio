import "./App.css";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Memorial from "./components/Memorial/Memorial";

function App() {
  return (
    <main className="bg-surface">
      <NavBar />
      <Hero />
      <Memorial />
      <Contact />
    </main>
  );
}

export default App;
